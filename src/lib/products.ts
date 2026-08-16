import productHandheld from "../assets/product-handheld.jpg";
import productMobile from "../assets/product-mobile.jpg";
import productRepeater from "../assets/product-repeater.jpg";

export type Category = string;

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  sku: string;
  name: string;
  description: string;
  longDescription: string;
  price: string;
  image: string;
  images: string[];
  category: string;
  brand: string;
  badge?: string;
  features: string[];
  inBox: string[];
  specs: ProductSpec[];
};

// This file now only contains the types.
// Data is fetched via api.ts
