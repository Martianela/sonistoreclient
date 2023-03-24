import React, { useState } from "react";
import "./Navbar.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/indflag.png" style={{ width: "30px" }} alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>Rupee</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className={"link"} to={"/products/1"}>
              Women
            </Link>
          </div>{" "}
          <div className="item">
            <Link className={"link"} to={"/products/2"}>
              Men
            </Link>
          </div>{" "}
          <div className="item">
            <Link className={"link"} to={"/products/3"}>
              Children
            </Link>
          </div>{" "}
        </div>
        <div className="center">
          <Link className={"link"} to={"/"}>
            SONISTORE
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className={"link"} to={"/products/3"}>
              Home
            </Link>
          </div>
          <div className="item">
            <Link className={"link"} to={"/products/3"}>
              About
            </Link>
          </div>
          <div className="item">
            <Link className={"link"} to={"/products/3"}>
              Contect
            </Link>
          </div>{" "}
          <div className="item">
            <Link className={"link"} to={"/products/3"}>
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setCartOpen(!cartOpen)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {cartOpen && <Cart />}
    </div>
  );
};

export default Navbar;
