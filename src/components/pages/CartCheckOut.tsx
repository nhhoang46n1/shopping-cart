import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem";
import { AddProduct, clearItem } from "../store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import toast, { Toaster } from "react-hot-toast";
import PopUp from "../common/PopUp";

const CartCheckOut: FC = () => {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const carts = useAppSelector((state) => state.Cart.cart);
  const dispatch = useAppDispatch();
  console.log(isCheckOut);
  const subTotal = carts.reduce(
    (acc: number, cart: AddProduct) =>
      acc + cart.productDetail.price * cart.quantity,
    0
  );
  const shippingCost = subTotal > 0 ? 10 : 0;
  const cartsLenght = carts.length;

  const handleCheckOut = () => {
    setIsCheckOut(!isCheckOut);
    dispatch(clearItem("Clear all"));
    toast.success("Purchased successfully!");
  };
  return (
    <div className="rounded-lg mx-auto overflow-hidden bg-transparent container xl:px-48 h-auto">
      <div className="grid lg:grid-cols-12 pt-5 gap-4 h-full auto-rows-min">
        <div className="lg:col-span-12">
          <div className="p-3 bg-pink-200 shadow-lg w-full rounded-lg">
            <div className="w-full text-center font-semibold">
              My Shopping Cart
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 overflow-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-12 ">
              <div className=" w-full h-full rounded-lg ">
                <div className="text-center font-bold text-xl">
                  {cartsLenght > 0 ? (
                    carts.map((cart, index) => (
                      <CartItem
                        key={index}
                        product={cart.productDetail}
                        quantityCart={cart.quantity}
                      />
                    ))
                  ) : (
                    <p>You have no products in cart</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <div className="bg-gray-100 px-4 py-2 grid gap-1 gird-cols-12 w-full rounded-lg h-44">
                <div className="col-span-12">
                  <h6 className="text-lg font-medium">Order Info</h6>
                </div>
                <div className="col-span-12 text-lg">
                  <div className="flex items-center justify-between">
                    <p className="font-light text-gray-700">Subtotal:</p>
                    <p className="font-normal">${subTotal.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-light text-gray-700">Shipping Cost:</p>
                    <p className="font-normal">${shippingCost}</p>
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="flex items-center justify-between font-semibold text-3xl">
                    <p>Total:</p>
                    <p>${(subTotal + shippingCost).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12">
              <Toaster />
              <div className="relative">
                <button
                  className={`flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
                bg-pink-500 text-white w-full ${
                  cartsLenght < 1
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer hover:bg-red-600"
                }`}
                  onClick={() => setIsCheckOut(!isCheckOut)}
                  disabled={true ? cartsLenght < 1 : false}
                >
                  Checkout
                </button>
                {isCheckOut && (
                  <PopUp
                    checkOut={handleCheckOut}
                    isCheckOut={isCheckOut}
                  ></PopUp>
                )}
              </div>
            </div>
            <div className="col-span-12">
              <Link to="/products">
                <button
                  className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    border border-pink-500 text-pink-500 hover:bg-pink-200 false w-full "
                >
                  Continue shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCheckOut;
