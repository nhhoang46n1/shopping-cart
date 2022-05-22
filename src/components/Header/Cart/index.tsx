import React, { FC } from "react";
import { Link } from "react-router-dom";
import { AddProduct } from "../../store/cart/cartSlice";
import { useAppSelector } from "../../store/hooks";

const Cart: FC = () => {
  const carts = useAppSelector((state) => state.Cart.cart);

  const quantityTotal = carts.reduce(
    (acc: number, cart: AddProduct) => acc + cart.quantity,
    0
  );
  return (
    <div className="flex items-center justify-end">
      <Link to={"/checkout"}>
        <div
          className="rounded-full relative flex items-center justify-center text-2xl
      w-10 h-10
      text-blue-500
      cursor-pointer"
        >
          <i className="fa-solid fa-cart-shopping"></i>
          {quantityTotal > 0 ? (
            <span
              className="h-5 w-5
          rounded-full absolute -right-1 -top-1 text-xs bg-red-500 text-white flex items-center justify-center"
            >
              {quantityTotal}
            </span>
          ) : (
            ""
          )}
        </div>
      </Link>
    </div>
  );
};

export default Cart;
