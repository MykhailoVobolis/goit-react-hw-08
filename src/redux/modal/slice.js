import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    // modalContent: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      //   state.modalContent = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      //   state.modalContent = null;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
