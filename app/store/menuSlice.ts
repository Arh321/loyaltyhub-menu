import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, Category } from "@/app/types/api-menu/menu";

interface MenuState {
  categories?: Category[];
  products?: Product[];
  selectedCategory?: number | null;
  selectedProduct?: Product | null;
}

const initialState: MenuState = {
  categories: [],
  products: [],
  selectedCategory: null,
  selectedProduct: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuData: (state, action: PayloadAction<MenuState>) => {
      state.categories = action.payload.categories;
      state.products = action.payload.products;
      state.selectedCategory = action.payload.selectedCategory;
      state.selectedProduct = action.payload.selectedProduct;
    },
  },
});

export const { setMenuData } = menuSlice.actions;
export default menuSlice.reducer;
