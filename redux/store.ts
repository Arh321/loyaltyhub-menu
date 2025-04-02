import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./company-slice/companySlice";
export const store = configureStore({
  reducer: {
    company: companyReducer,
  },
});

// ✅ Infer Types for Usage in Components
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
