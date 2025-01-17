export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'beds' | 'sofas' | 'poufs';
  images: string[];
  whatsappLink: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
}