import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBasketState } from "@/types/menu/menu-types";

interface IBasketSlice {
  basket: IBasketState[];
}

const initialState: IBasketSlice = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<IBasketState>) => {
      state.basket.push(action.payload);
    },
    removeFromBasket: (state, action: PayloadAction<IBasketState>) => {
      state.basket = state.basket.filter(
        (product) => product.productId !== action.payload.productId
      );
    },
    clearBasket: (state) => {
      state.basket = [];
    },
    incrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const product = state.basket.find(
        (product) => product.productId === action.payload.id
      );
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<{ id: number }>) => {
      const product = state.basket.find(
        (product) => product.productId === action.payload.id
      );
      if (product) {
        product.quantity -= 1;
        if (product?.quantity === 0) {
          state.basket = state.basket.filter(
            (item) => item.productId !== product.productId
          );
        }
      }
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  clearBasket,
  incrementQuantity,
  decrementQuantity,
} = basketSlice.actions;
export default basketSlice.reducer;
