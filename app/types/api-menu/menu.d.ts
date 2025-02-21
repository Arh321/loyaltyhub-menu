//here is the place of interfaces
export interface Main {
  status: string;
  message: string;
  result: Result[];
  errors: null;
}

export interface Result {
  menu_id: number;
  menu_name: string;
  menu_description: string;
  menu_created_at: Date;
  menu_updated_at: Date;
  categories: Category[];
}

export interface Category {
  category_id: number | null;
  category_name: null | string;
  category_description: null | string;
  category_status: number | null;
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  price: number;
  discount: number;
  available: number;
  featured: boolean;
  level: number;
  thumbnail: Thumbnail;
  album: any[];
  has_discount: number;
  discount_type: string;
  discount_value: number;
  discount_start_date: Date | null;
  discount_end_date: Date | null;
}

export interface Thumbnail {
  id: null;
  name: string;
  url: string;
}
