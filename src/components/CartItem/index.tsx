import React, { FC, useEffect, useState } from "react";
import {
  decreaseItem,
  increaseItem,
  removeItem,
} from "../store/cart/cartSlice";
import { useAppDispatch } from "../store/hooks";

interface ICartItem {
  product: any;
  quantityCart: number;
}
const CartItem: FC<ICartItem> = ({ product, quantityCart }) => {
  const dispatch = useAppDispatch();
  let [quantity, setQuantity] = useState(quantityCart || 1);

  function handleIncreaseItem(id: string) {
    dispatch(increaseItem(id));
    setQuantity((pre: number) => pre + 1);
  }

  function handleDecreaseItem(id: string) {
    dispatch(decreaseItem(id));
    setQuantity((pre: number) => pre - 1);
  }

  function handleRemoveItem(id: string) {
    dispatch(removeItem(id));
  }
  useEffect(() => {
    setQuantity((quantity = quantityCart));
  }, [product]);
  return (
    <div className="grid grids-col-12 gap-3 h-full mt-2">
      <div className="col-span-12 cursor-pointer">
        <div className="flex h-44 gap-3 px-4 py-4 rounded-lg bg-pink-100 shadow-lg ">
          <div className="w-2/6">
            <img
              src={product?.imageUrl}
              alt="item"
              className="object-cover w-full h-[150px]"
            />
          </div>
          <div className="w-4/6 flex flex-col justify-between">
            <div>
              <h4 className="text-xl cursor-pointer  font-semibold">
                {product?.productName}
              </h4>
              <p className="text-md font-light text-gray-700">
                {product?.description}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h3 className="text-[20px] font-semibold w-1/3">
                ${product?.price}
              </h3>
              <div className="flex items-center justify-between bg-pink-300 rounded-lg px-5 py-1 w-1/3">
                <button
                  className={`outline-none border-0 bg-transparent text-black-300 ${
                    quantity < 2 ? "text-gray-300" : ""
                  }`}
                  onClick={() => handleDecreaseItem(product?.productId)}
                  disabled={true ? quantity < 2 : false}
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
                <div className="text-black font-semibold text-lg">
                  {quantity}
                </div>
                <button
                  className="outline-none border-0 bg-transparent text-black-300"
                  onClick={() => handleIncreaseItem(product?.productId)}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
              <div
                className="flex items-center justify-between bg-pink-300 rounded-lg px-5 py-1"
                onClick={() => handleRemoveItem(product?.productId)}
              >
                <button className="outline-none border-0 bg-transparent text-red-600">
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
