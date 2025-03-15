import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  openModals: Record<string, boolean>; // ذخیره وضعیت هر مودال بر اساس شناسه
}

const initialState: ModalState = {
  openModals: {}, // شیء برای ذخیره وضعیت هر مودال
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      const modalId = action.payload;
      state.openModals[modalId] = true; // باز کردن مودال با شناسه مشخص
      // console.log(modalId);
    },
    closeModal: (state, action: PayloadAction<string>) => {
      const modalId = action.payload;
      state.openModals[modalId] = false; // بستن مودال با شناسه مشخص
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
