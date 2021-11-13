import React from "react";
import Logo from "../logo";

const AppHeader = () => {
  return (
    <div className="app__header_container">
      <Logo />
      <div className="app__header_text">
        <div>Crypto Profit Calculator</div>
        <div>Calculate ROI on most major crypto currencies</div>
      </div>
    </div>
  );
};

export default AppHeader;
