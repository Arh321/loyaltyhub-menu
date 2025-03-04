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
      console.log(
        "📢 مقدار جدید `selectedProduct` در Redux:",
        state.selectedProduct
      );
    },
  },
});

export const { setMenuData } = menuSlice.actions;
export default menuSlice.reducer;
