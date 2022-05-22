import React, { FC } from "react";
import ButtonAddToCart from "./ButtonAddToCart";
import ItemDetail from "./ItemDetail";

interface IItemDesc {
  productId: string;
}
const ItemDesc: FC<IItemDesc> = ({ productId }) => {
  return (
    <div className="flex flex-col gap-y-3 h-full shadow-lg bg-pink-100 rounded-lg">
      <div className="col-span-12">
        <ButtonAddToCart productId={productId} />
      </div>
      <div className="h-[80%]">
        <ItemDetail productId={productId} />
      </div>
    </div>
  );
};

export default ItemDesc;
