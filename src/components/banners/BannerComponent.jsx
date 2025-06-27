import React, { useState } from "react";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";

function Banner({ title, info, desc, image }) {
  const showText = "Conocer mas";
  const hideText = "Ver menos";
  const [showInfo, setShowInfo] = useState(false);
  const [showButton, setShowButton] = useState(showText);

  const hideInfo = () => {
    setShowInfo(!showInfo);
    setShowButton(showInfo ? showText : hideText);
  };

  return (
    <>
      <div className="card">
        <h2 className="card-title pt-5"> {title}</h2>
        <div className="card-body">
          {image && (
            <img
              className="card-img-top product-img"
              src={image}
              alt="Card image cap"
            ></img>
          )}
          <h4 className={showInfo ? "d-block" : "d-none"}>{info}</h4>
          <p className={showInfo ? "d-block" : "d-none"}>{desc}</p>
        </div>

        <button className="btn btn-primary" onClick={hideInfo}>
          {showInfo ? <FaAnglesUp /> : <FaAnglesDown />} {showButton}
        </button>
      </div>
    </>
  );
}

export default Banner;
