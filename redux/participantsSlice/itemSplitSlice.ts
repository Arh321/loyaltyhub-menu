// redux/slices/itemSplitSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface AssignedItem {
  productId: number;
  quantity: number;
}

export interface AssignedParticipant {
  participantId: string;
  items: AssignedItem[];
}

export interface ItemSplitState {
  assignments: AssignedParticipant[];
}

const initialState: ItemSplitState = {
  assignments: [],
};

const itemSplitSlice = createSlice({
  name: "itemSplit",
  initialState,
  reducers: {
    assignItemToParticipant: (
      state,
      action: PayloadAction<{
        participantId: string;
        productId: number;
        quantity: number;
      }>
    ) => {
      const { participantId, productId, quantity } = action.payload;

      const participant = state.assignments.find(
        (p) => p.participantId === participantId
      );

      if (!participant) {
        state.assignments.push({
          participantId,
          items: [{ productId, quantity }],
        });
      } else {
        const item = participant.items.find((i) => i.productId === productId);
        if (item) {
          item.quantity = quantity;
        } else {
          participant.items.push({ productId, quantity });
        }
      }
    },

    removeItemFromParticipant: (
      state,
      action: PayloadAction<{
        participantId: string;
        productId: number;
      }>
    ) => {
      const { participantId, productId } = action.payload;

      const participant = state.assignments.find(
        (p) => p.participantId === participantId
      );

      if (participant) {
        participant.items = participant.items.filter(
          (i) => i.productId !== productId
        );
      }
    },

    resetItemSplit: (state) => {
      state.assignments = [];
    },
  },
});

export const {
  assignItemToParticipant,
  removeItemFromParticipant,
  resetItemSplit,
} = itemSplitSlice.actions;

export default itemSplitSlice.reducer;
