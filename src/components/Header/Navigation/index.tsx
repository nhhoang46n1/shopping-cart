import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

const Navigation: FC = () => {
  const navigationName = ["home", "products", "reviews"];
  const [isActive, setIsActive] = useState<number>(1);

  function handleActive(index: number) {
    setIsActive(index);
  }
  return (
    <>
      {navigationName.map((name, index) => (
        <Link
          key={index}
          to={`/${name}`}
          className={`text-gray-500 hover:text-black inline-block text-lg font-normal relative capitalize ${
            isActive === index ? "font-extrabold active-navigation" : ""
          }`}
          onClick={() => handleActive(index)}
        >
          {name}
        </Link>
      ))}
    </>
  );
};

export default Navigation;
