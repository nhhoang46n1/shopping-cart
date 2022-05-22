import React, { FC } from "react";
import { IProduct } from "../../../models";
import { useAppSelector } from "../../store/hooks";

interface IItemDetail {
  productId: string;
}
const ItemDetail: FC<IItemDetail> = ({ productId }) => {
  const products = useAppSelector((state) => state.Product.products);
  const productDetail = products?.filter(
    (item: IProduct) => item.productId === productId
  )[0];

  return (
    <div className="h-full px-2">
      <div className="px-3">
        <h2 className="text-4xl font-normal mb-2">
          {productDetail?.productName}
        </h2>
        <p className="text-md font-light text-gray-700">
          {productDetail?.description}
        </p>
      </div>
      <div className="flex justify-center h-full items-center">
        <img
          src={productDetail?.imageUrl}
          alt=""
          className=" object-cover h-[400px]"
        />
      </div>
    </div>
  );
};

export default ItemDetail;
