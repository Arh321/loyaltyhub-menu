import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/products/products";

interface CartItem extends Product {
  quantity: number;
  totalPrice: number; // ✅ جمع قیمت همین محصول
  categoryName?: string;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

interface AddItemPayload {
  product: Product | undefined;
  categoryName?: string;
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<AddItemPayload>) => {
      const { product, categoryName } = action.payload;

      // بررسی کنیم که محصول مقدار داشته باشد
      if (!product) return;

      const existingItem = state.items.find(
        (item) => item.product_id === product.product_id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += product.price; // ✅ آپدیت قیمت کل محصول
      } else {
        state.items.push({
          ...product,
          quantity: 1,
          totalPrice: product.price, // ✅ مقدار اولیه قیمت کل
          categoryName,
        });
      }

      state.totalQuantity += 1;
      state.totalAmount += product.price;
    },

    removeItem: (state, action: PayloadAction<number | undefined>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.product_id === action.payload
      );

      if (itemIndex !== -1) {
        const item = state.items[itemIndex];

        if (item.quantity > 1) {
          item.quantity -= 1;
          item.totalPrice -= item.price; // ✅ کم کردن قیمت یک واحد
        } else {
          state.items.splice(itemIndex, 1); // ❌ حذف کامل آیتم
        }

        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

// ✅ Export action creators
export const { addItem, removeItem, clearCart } = cartSlice.actions;

// ✅ Export reducer as default
export default cartSlice.reducer;
