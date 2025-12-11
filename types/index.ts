// 商品類型
export type ProductCategory = '吊飾' | '擺飾' | '圍巾' | 'IP系列' | '其他';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  originalPrice?: number;
  description: string;
  images: string[];
  size?: string;
  customizable: boolean;
  inStock: boolean;
  featured?: boolean;
  story?: string;
  tags?: string[];
}

// 作品類型
export interface Work {
  id: string;
  title: string;
  description: string;
  images: string[];
  story?: string;
  category: ProductCategory;
  createdAt: string;
}

// 最新消息類型
export interface News {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  image?: string;
  createdAt: string;
  featured?: boolean;
}

// 聯絡表單類型
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  productId?: string;
  message: string;
  type: '訂製詢問' | '一般詢問' | '課程詢問';
}

