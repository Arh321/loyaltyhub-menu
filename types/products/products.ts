import { Product } from "../menu/menu-types";

export interface Main {
  status: string;
  data: Product[];
}

// export interface Product {
//   product_id: number;
//   category_id: number;
//   name: string;
//   price: number;
//   discount: number;
//   is_available: number;
//   image_url: string;
//   inventory: number;
//   description: string;
// }
