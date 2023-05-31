import React from "react";
import Iphone from "./Iphone";

const Hero = () => {
  return (
    <div style={{ height: "97vh" }}>
      <div className="hero-offer">
        <p>
          Get up to ₹8000.00 instant savings on selected products with eligible
          HDFC Bank cards.* <a className="linkhover" href="/">Shop now <i className="bi bi-chevron-right arrow arrow1"></i></a>
        </p>
      </div>
      <div className="container">
      <p className="heading">
        iPhone 14 Pro
      </p>
      <p className="sub-heading">
        Pro. Beyond.
      </p>
      <div className="links">
        <a href="#" className="link1 linkhover">Learn more <i className="bi bi-chevron-right arrow"></i></a>
        <a href="#" className="link2 linkhover">Buy <i className="bi bi-chevron-right arrow"></i></a>
      </div>
        <img src="public/images/hero.jpg" />
      </div>
      <Iphone/>
    </div>
  );
};

export default Hero;
