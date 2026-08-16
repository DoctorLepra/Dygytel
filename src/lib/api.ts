import { useQuery } from "@tanstack/react-query";
import { Product } from "./products";

const API_URL = "http://127.0.0.1:8000/api";

const parseArray = (data: any): string[] => {
  if (Array.isArray(data)) return data.map(i => String(i));
  if (typeof data === 'string') {
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) return parsed.map(i => String(i));
    } catch(e) {}
    if (data.includes('\n')) {
      return data.split('\n').map(s => s.trim()).filter(Boolean);
    }
    if (data.includes(',')) {
      return data.split(',').map(s => s.trim()).filter(Boolean);
    }
    return data.trim() ? [data.trim()] : [];
  }
  return [];
};

const parseSpecs = (data: any): { label: string; value: string }[] => {
  const items = parseArray(data);
  return items.map((item: any) => {
    if (typeof item === 'object' && item !== null && 'label' in item && 'value' in item) {
      return item;
    }
    if (typeof item === 'string') {
      const parts = item.split(':');
      if (parts.length >= 2) {
        return {
          label: parts[0].trim(),
          value: parts.slice(1).join(':').trim()
        };
      }
      return { label: 'General', value: item.trim() };
    }
    return { label: 'Info', value: String(item) };
  }).filter(s => s.label || s.value);
};

const formatPrice = (priceVal: any): string => {
  if (priceVal === null || priceVal === undefined || priceVal === "") return "$ 0";
  const num = typeof priceVal === 'number' ? priceVal : parseFloat(String(priceVal).replace(/[^0-9.]/g, ''));
  if (isNaN(num)) return "$ 0";
  return "$ " + Math.round(num).toLocaleString("es-CO");
};

const resolveImages = (img: any): string[] => {
  const parsed = parseArray(img);
  if (parsed.length > 0) {
    return parsed.map(i => i.startsWith('http') ? i : `http://127.0.0.1:8000/storage/${i}`);
  }
  if (typeof img === 'string' && img.trim()) {
    return [img.startsWith('http') ? img : `http://127.0.0.1:8000/storage/${img}`];
  }
  return [];
};

// Fetch all products
export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  
  // Map backend model to frontend Product type
  return data.map((item: any) => {
    const imgs = resolveImages(item.image);
    return {
      sku: item.sku,
      name: item.name,
      description: item.description,
      longDescription: item.description,
      price: formatPrice(item.price),
      image: imgs[0] || "",
      images: imgs,
      category: item.category,
      brand: item.brand,
      badge: null,
      features: parseArray(item.features),
      inBox: parseArray(item.in_the_box),
      specs: parseSpecs(item.specs),
    };
  });
};

// Fetch single product by SKU
export const fetchProductBySku = async (sku: string): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${sku}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  const item = await response.json();
  const imgs = resolveImages(item.image);
  
  return {
    sku: item.sku,
    name: item.name,
    description: item.description,
    longDescription: item.description,
    price: formatPrice(item.price),
    image: imgs[0] || "",
    images: imgs,
    category: item.category,
    brand: item.brand,
    badge: null,
    features: parseArray(item.features),
    inBox: parseArray(item.in_the_box),
    specs: parseSpecs(item.specs),
  };
};

// Fetch categories
export const fetchCategories = async (): Promise<string[]> => {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) return [];
  return response.json();
};

// Fetch brands
export const fetchBrands = async (): Promise<string[]> => {
  const response = await fetch(`${API_URL}/brands`);
  if (!response.ok) return [];
  return response.json();
};

// Fetch web content
export const fetchWebContent = async (): Promise<Record<string, Record<string, string>>> => {
  const response = await fetch(`${API_URL}/content`);
  if (!response.ok) {
    throw new Error("Failed to fetch web content");
  }
  return response.json();
};

// --- React Query Hooks ---

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};

export const useBrands = () => {
  return useQuery({
    queryKey: ["brands"],
    queryFn: fetchBrands,
  });
};

export const useProduct = (sku: string) => {
  return useQuery({
    queryKey: ["product", sku],
    queryFn: () => fetchProductBySku(sku),
    enabled: !!sku,
  });
};

export const useWebContent = () => {
  return useQuery({
    queryKey: ["webContent"],
    queryFn: fetchWebContent,
  });
};
