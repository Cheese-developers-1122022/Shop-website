import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
console.log(initialState.products);
const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
        state.products += payload
    },
  },
});
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
