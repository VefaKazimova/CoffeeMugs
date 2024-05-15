import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "basket",
  initialState: {
    baskets: [],
  },
  reducers: {
    incremented: (state, action) => {
      const _prod = state.baskets.find((prod) => prod.id === action.payload.id);
      if (_prod) {
        _prod.count++;
      } else {
        const newProd = { ...action.payload, count: 1 };
        state.baskets.push(newProd);
      }
    },
    decremented: (state, action) => {
      const _prod = state.baskets.find((prod) => prod.id === action.payload.id);
      if (_prod && _prod.count > 1) {
        _prod.count--;
      } else {
        state.baskets = state.baskets.filter((p) => p.id !== action.payload.id);
      }
    },
    removeProduct: (state, action) => {
      state.baskets = state.baskets.filter((p) => p.id !== action.payload.id);
    },
  },
});
export const { incremented, decremented, removeProduct } = Slice.actions;
export const selectbasket = (state) => state.baskets;
export default Slice.reducer;
