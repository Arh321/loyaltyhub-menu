import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import menuReducer from "./menuSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuReducer,
  },
});

// ✅ Infer Types for Usage in Components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
