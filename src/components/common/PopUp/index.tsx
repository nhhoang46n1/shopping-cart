import React, { FC } from "react";
import "./PopUp.css";

interface IPopUp {
  checkOut: any;
  isCheckOut: boolean;
}
const PopUp: FC<IPopUp> = ({ checkOut, isCheckOut }) => {
  return (
    <div className={`popup ${isCheckOut ? "popup-show" : ""}`}>
      <div className="popup-background"></div>
      <div className="popup-content">
        <h5 className="popup-text text-center">Do you want to submit ?</h5>
        <div className="popup-button">
          <button
            className="border border-pink-500 text-black hover:bg-pink-600 hover:text-white"
            onClick={checkOut}
          >
            Sure
          </button>
          <button className="border border-pink-500 text-black hover:bg-pink-600 hover:text-white">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;

// ${isShowPopup && "popup-show"}
