import { useQuery } from "@tanstack/react-query";
import { Product, products as staticProducts } from "./products";

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

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
  const baseUrl = API_URL.replace(/\/api\/?$/, '');
  if (parsed.length > 0) {
    return parsed.map(i => i.startsWith('http') ? i : `${baseUrl}/storage/${i}`);
  }
  if (typeof img === 'string' && img.trim()) {
    return [img.startsWith('http') ? img : `${baseUrl}/storage/${img}`];
  }
  return [];
};

const fetchWithTimeout = async (url: string, options: RequestInit = {}, timeoutMs = 2500): Promise<Response> => {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
};

// Fetch all products with safe fallback
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetchWithTimeout(`${API_URL}/products`);
    if (!response.ok) return staticProducts;
    const data = await response.json();
    if (!Array.isArray(data) || data.length === 0) return staticProducts;
    
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
  } catch (error) {
    console.warn("API Products unreachable, using static fallback:", error);
    return staticProducts;
  }
};

// Fetch single product by SKU with safe fallback
export const fetchProductBySku = async (sku: string): Promise<Product> => {
  try {
    const response = await fetchWithTimeout(`${API_URL}/products/${sku}`);
    if (!response.ok) {
      const local = staticProducts.find((p) => p.sku.toLowerCase() === sku.toLowerCase());
      if (local) return local;
      throw new Error("Product not found");
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
  } catch (error) {
    console.warn("API ProductBySku unreachable, using static fallback:", error);
    const local = staticProducts.find((p) => p.sku.toLowerCase() === sku.toLowerCase());
    if (local) return local;
    throw error;
  }
};

// Fetch categories with safe fallback
export const fetchCategories = async (): Promise<string[]> => {
  try {
    const response = await fetchWithTimeout(`${API_URL}/categories`);
    if (!response.ok) return [];
    const data = await response.json();
    if (!Array.isArray(data)) return [];
    return data.map((c: any) => typeof c === 'string' ? c : c.name).filter(Boolean);
  } catch (error) {
    console.warn("API Categories unreachable:", error);
    return [];
  }
};

// Fetch brands with safe fallback
export const fetchBrands = async (): Promise<string[]> => {
  try {
    const response = await fetchWithTimeout(`${API_URL}/brands`);
    if (!response.ok) return [];
    const data = await response.json();
    if (!Array.isArray(data)) return [];
    return data.map((b: any) => typeof b === 'string' ? b : b.name).filter(Boolean);
  } catch (error) {
    console.warn("API Brands unreachable:", error);
    return [];
  }
};

// Fetch web content with safe fallback
export const fetchWebContent = async (): Promise<Record<string, Record<string, string>>> => {
  try {
    const response = await fetchWithTimeout(`${API_URL}/content`);
    if (!response.ok) return {};
    return await response.json();
  } catch (error) {
    console.warn("API WebContent unreachable, using static defaults:", error);
    return {};
  }
};

// --- React Query Hooks ---

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    retry: 1,
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    retry: 1,
  });
};

export const useBrands = () => {
  return useQuery({
    queryKey: ["brands"],
    queryFn: fetchBrands,
    retry: 1,
  });
};

export const useProduct = (sku: string) => {
  return useQuery({
    queryKey: ["product", sku],
    queryFn: () => fetchProductBySku(sku),
    enabled: !!sku,
    retry: 1,
  });
};

export const useWebContent = () => {
  return useQuery({
    queryKey: ["webContent"],
    queryFn: fetchWebContent,
    staleTime: 1000 * 60 * 10, // 10 minutes cache
    gcTime: 1000 * 60 * 60, // 1 hour memory retention
    retry: 1,
  });
};
