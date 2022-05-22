import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import createSagaMiddleware from "@redux-saga/core";


import rootSaga from './rootSaga';
import productReducer from "./product/productSlice";
import cartProducer from "./cart/cartSlice";


const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    Product: productReducer,
    Cart: cartProducer
  },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
