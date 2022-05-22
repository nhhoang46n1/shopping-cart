import React, { FC } from "react";
import { useAppSelector } from "../store/hooks";
import Item from "./Item";

interface IItemList {
  handleOnClickProduct: (index: string) => void;
}
const ItemList: FC<IItemList> = ({ handleOnClickProduct }) => {
  const products = useAppSelector((state) => state.Product.products);

  function onClickProduct(productId: string) {
    handleOnClickProduct(productId);
  }
  return (
    <div className="col-span-5 rounded-lg h-full">
      <div className="grid grids-col-12 gap-3 h-full">
        {products?.map((item) => (
          <Item
            key={item.productId}
            product={item}
            onClickProduct={onClickProduct}
          ></Item>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
