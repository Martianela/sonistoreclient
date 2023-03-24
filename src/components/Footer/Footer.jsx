import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Man</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrievels</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>{" "}
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            cumque ut velit debitis eius accusantium, qui assumenda omnis
            praesentium doloremque architecto eos reprehenderit impedit minus
            illo facere amet ab? Perspiciatis!
          </span>
        </div>{" "}
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum a
            quaerat recusandae architecto voluptatem saepe, error dolorem eos
            modi, dignissimos expedita eveniet sed itaque odio vel odit ipsam
            quos dolor.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Sonistore</span>
          <span className="copyright">©Copyright All rights reserved</span>
        </div>
        <div className="right">
          <img src="./" alt="icons" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
