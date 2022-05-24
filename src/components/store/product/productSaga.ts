import productsApi from "../../../api/productsApi";
import {call, put, takeLatest} from "redux-saga/effects";
import { IProduct, ListResponse } from "../../../models";
import { getProductList, getProductListLoading } from "./productSlice";

function* fetchProductList() {
    try {
        const response:ListResponse<IProduct> = yield call(productsApi.getAll)
        yield put(getProductList(response.data))
        
    } catch (error) {
        console.log("failed to get ProductList",error)
    }
}

export default function* productSaga () {
    yield takeLatest(getProductListLoading,fetchProductList )
}   