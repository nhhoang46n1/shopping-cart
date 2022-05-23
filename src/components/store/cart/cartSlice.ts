import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { start } from "repl";
import { IProduct } from "../../../models";


export interface AddProduct {
    productDetail: IProduct;
    quantity: number;
}

interface cartState {
    cart: AddProduct[];
}

const initialState:cartState = {
    cart: [],
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<any>) => {
            const addItem: AddProduct = action.payload;
            const addProductId = action.payload.productDetail.productId;
            // console.log("addItem", addItem)
            // console.log("addProductId", addProductId)
            const newQuantity = addItem.quantity;

            const handleAddAndUpdateItem = state.cart.findIndex((x:any) => (x.productDetail.productId === addProductId))
            if(handleAddAndUpdateItem >= 0) {
                state.cart[handleAddAndUpdateItem].quantity += newQuantity
            } else {
                state.cart.push(addItem)
            }
        },

        decreaseItem: (state, action: PayloadAction<any>) => {
            const addProductId = action.payload;
            // console.log("abc", addProductId)
            const handleAddAndUpdateItem = state.cart.findIndex((x:any) => (x.productDetail.productId === addProductId))
            state.cart[handleAddAndUpdateItem].quantity -= 1;
        },

        increaseItem: (state, action: PayloadAction<any>) => {
            const addProductId = action.payload;
            // console.log("acction", action   );
            const handleAddAndUpdateItem = state.cart.findIndex((x:any) => (x.productDetail.productId === addProductId))
            state.cart[handleAddAndUpdateItem].quantity += 1;
        },

        removeItem: (state, action: PayloadAction<any>) => {
            const addProductId = action.payload;
            const handleAddAndUpdateItem = state.cart.findIndex((x:any) => (x.productDetail.productId === addProductId))
            state.cart.splice(handleAddAndUpdateItem, 1)
        },

        clearItem: (state, action: PayloadAction<any>) => {
            const addProductId = action.payload
            state.cart = []
        }
    }
}) 

export const {addItem, decreaseItem, increaseItem, removeItem, clearItem} =  cartSlice.actions
const cartProducer = cartSlice.reducer
export default cartProducer 