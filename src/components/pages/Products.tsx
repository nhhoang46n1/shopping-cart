import React, { FC, useState } from "react";
import ItemDesc from "../ItemDesc";
import ItemList from "../ItemList";
import Loading from "../Loading";
import { useAppSelector } from "../store/hooks";

const Products: FC = () => {
  const [productId, setProductId] = useState("1");
  const products = useAppSelector((state) => state.Product.products);
  const handleOnClickProduct = (id: string) => {
    setProductId(id);
  };
  return (
    <>
      {products.length <= 0 ? (
        <Loading />
      ) : (
        <div className="wrapper-products-page pt-5 h-full">
          <div className="container mx-auto px-[120px] h-full">
            <div className="grid grid-cols-12 h-full gap-5">
              <div className="col-span-5 h-full overflow-auto rounded-lg">
                <ItemList handleOnClickProduct={handleOnClickProduct} />
              </div>
              <div className="col-span-7 h-full">
                <ItemDesc productId={productId} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
