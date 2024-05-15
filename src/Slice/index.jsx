import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const Slice = createSlice({
  name: "basket",
  initialState: {
    baskets: localStorage.getItem("baskets")
      ? JSON.parse(localStorage.getItem("baskets"))
      : [],
    subtotal: 0,
  },
  reducers: {
    incremented: (state, action) => {
      const _prod = state.baskets.find((prod) => prod.id === action.payload.id);
      if (_prod) {
        _prod.count++;
        toast.success("The quantity of the product increased!");
      } else {
        const newProd = { ...action.payload, count: 1 };
        state.baskets.push(newProd);
        toast.success("Product added to basket!");
      }
      localStorage.setItem("baskets", JSON.stringify(state.baskets));
      state.subtotal = state.baskets.reduce((total, product) => {
        return total + product.price * product.count;
      }, 0);
    },
    decremented: (state, action) => {
      const _prod = state.baskets.find((prod) => prod.id === action.payload.id);
      if (_prod && _prod.count > 1) {
        _prod.count--;
      } else {
        state.baskets = state.baskets.filter((p) => p.id !== action.payload.id);
      }
      state.subtotal = state.baskets.reduce((total, product) => {
        return total + product.price * product.count;
      }, 0);

      toast.success("The quantity of the product decreased!");
    },
    removeProduct: (state, action) => {
      state.baskets = state.baskets.filter((p) => p.id !== action.payload.id);
      state.subtotal = state.baskets.reduce((total, product) => {
        return total + product.price * product.count;
      }, 0);
      localStorage.setItem("baskets", JSON.stringify(state.baskets));

      toast.error("Product removed from basket!");
    },
    calculateSubtotal: (state) => {
      state.subtotal = state.baskets.reduce((total, product) => {
        return total + product.price * product.count;
      }, 0);
    },
  },
});

export const { incremented, decremented, removeProduct, calculateSubtotal } =
  Slice.actions;
export default Slice.reducer;
