import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/api-menu/menu";

interface CartItem extends Product {
  quantity: number;
  totalPrice: number; // ✅ جمع قیمت همین محصول
  categoryName: null | string;
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

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product | null | undefined>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload?.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += action.payload?.price; // ✅ آپدیت قیمت کل محصول
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
          totalPrice: action.payload?.price, // ✅ مقدار اولیه قیمت کل
        });
      }

      state.totalQuantity += 1;
      state.totalAmount += action.payload?.price;
    },

    removeItem: (state, action: PayloadAction<number | undefined>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
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
