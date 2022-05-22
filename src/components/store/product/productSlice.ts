import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../models";


interface productState {
    products: IProduct []
}

const initialState: productState = {
    products: [],
}

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers: {     
        getProductListLoading: () => {},
        getProductList: (state, action) => {
            state.products = action.payload
        }
    }
})

export const {getProductListLoading, getProductList} = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer