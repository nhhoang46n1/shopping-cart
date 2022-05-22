import React, { FC } from "react";
import comingImg from "../../assets/comingsoon.png";
const Reviews: FC = () => {
  return (
    <div className="flex w-full items-center justify-center pt-12">
      <img src={comingImg} alt="Coming Soon" className="w-96" />
    </div>
  );
};

export default Reviews;
