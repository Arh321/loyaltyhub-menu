import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../types/categories";
import { Product } from "../types/products/products";

interface MenuState {
  categories?: Category[];
  products?: Product[];
  selectedCategory?: Category;
  selectedProduct?: Product;
}

const initialState: MenuState = {
  categories: [],
  products: [],
  selectedCategory: undefined,
  selectedProduct: undefined,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuData: (state, action: PayloadAction<MenuState>) => {
      if (action.payload.categories !== undefined) {
        state.categories = action.payload.categories;
      }
      if (action.payload.products !== undefined) {
        state.products = action.payload.products;
      }
      if (action.payload.selectedCategory !== undefined) {
        state.selectedCategory = action.payload.selectedCategory;
      }
      if (action.payload.selectedProduct !== undefined) {
        state.selectedProduct = action.payload.selectedProduct;
      }
    },
  },
});

export const { setMenuData } = menuSlice.actions;
export default menuSlice.reducer;
