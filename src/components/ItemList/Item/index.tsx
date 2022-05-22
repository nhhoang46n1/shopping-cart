import React, { FC } from "react";
import { IProduct } from "../../../models";

interface IItem {
  product?: IProduct;
  onClickProduct: (productId: any) => void;
}
const Item: FC<IItem> = ({ product, onClickProduct }) => {
  return (
    <div
      className="col-span-12 cursor-pointer"
      onClick={() => onClickProduct(product?.productId)}
    >
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
          <div className="flex justify-end items-center">
            <h3 className="text-[20px] font-semibold"> ${product?.price}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
