import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "basket",
  initialState: {
    baskets: [],
    value: 0,
  },
  reducers: {
    incremented: (state, action) => {
      state.value++;
      const addProduct = state.baskets.find(
        (prod) => prod.id === action.payload.id
      );
      if (addProduct) {
        addProduct.count++;
      } else {
        const newProd = { ...action.payload, count: 1 };
        state.baskets.push(newProd);
      }
    },
    decremented: (state, action) => {
      const index = state.baskets.findIndex(
        (prod) => prod.id === action.payload.id
      );
      if (index !== -1) {
        state.baskets.splice(index, 1);
        state.value--;
      }
    },
  },
});
export const { incremented, decremented } = Slice.actions;
export const selectbasket = (state) => state.basket.baskets;
export default Slice.reducer;
