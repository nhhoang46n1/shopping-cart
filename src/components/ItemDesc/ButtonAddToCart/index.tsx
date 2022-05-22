import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addItem,
  decreaseItem,
  increaseItem,
} from "../../store/cart/cartSlice";
import { useAppSelector } from "../../store/hooks";

interface IButtonAddToCart {
  productId: string;
}
const ButtonAddToCart: FC<IButtonAddToCart> = ({ productId }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const products = useAppSelector((state) => state.Product.products);
  const productDetail = products?.filter(
    (item) => item.productId === productId
  )[0];

  const cartStorage = {
    quantity,
    productDetail,
  };

  function handleAddItem() {
    dispatch(addItem(cartStorage));
  }

  useEffect(() => setQuantity(1), [productId]);
  return (
    <div className="flex items-center justify-between mt-2 px-3">
      <div className="w-1/6">
        <div className="flex items-center justify-between bg-pink-300 rounded-lg px-5 py-1 ">
          <button
            className={`outline-none border-0 bg-transparent text-black-300 ${
              quantity < 2 ? "text-gray-300" : ""
            }`}
            disabled={true ? quantity < 2 : false}
            onClick={() => setQuantity((pre) => pre - 1)}
          >
            <i className="fa-solid fa-minus"></i>
          </button>
          <div className="text-black font-semibold text-lg">{quantity}</div>
          <button
            className="outline-none border-0 bg-transparent text-black-300"
            onClick={() => setQuantity((pre) => pre + 1)}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div className="text-right flex items-center gap-8">
        <p className="mb-0 font-bold text-[24px]">
          ${(productDetail?.price * quantity).toFixed(2)}
        </p>
        <button
          className="flex items-center justify-center duration-100 shadow-md px-6 py-3 text-[14px] rounded-lg   
    bg-pink-500 text-white hover:bg-pink-400 false gap-4"
          onClick={handleAddItem}
        >
          <i className="fa-solid fa-cart-shopping"></i>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ButtonAddToCart;
