export interface Main {
  status: string;
  message: string;
  result: Category[];
  errors: null;
}

export interface Category {
  category_id: number;
  menu_id: number;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  is_active: number;
  is_featured: number;
  image_base64: string;
}
