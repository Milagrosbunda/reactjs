import React, { useState } from "react";

function Banner({ title, info, desc }) {
  const showText = "Conocer mas";
  const hideText = "Ver menos";
  const [showInfo, setShowInfo] = useState(false);
  const [showButton, setShowButton] = useState(showText);

  const hideInfo = () => {
    setShowInfo(!showInfo);
    setShowButton(showInfo ? showText : hideText);
    console.log(this.title);
  };

  return (
    <>
      <div className="card">
        <h2 className="card-title pt-5">🚀 {title}</h2>
        <div className="card-body">
          <h4 className={showInfo ? "d-block" : "d-none"}>{info}</h4>
          <p className={showInfo ? "d-block" : "d-none"}>{desc}</p>
        </div>

        <button className="btn btn-primary" onClick={hideInfo}>
          {showButton}
        </button>
      </div>
    </>
  );
}

export default Banner;
