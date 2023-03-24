import React, { useState } from "react";
import "./Product.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducers";
const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img1");
  const [quantity, setQuantity] = useState(1);
  const { data, isLoading, err } = useFetch(`/products/${id}?populate=*`);
  const dispatch = useDispatch();
  return (
    <>
      {err ? (
        err
      ) : isLoading ? (
        "loading"
      ) : (
        <div className="product">
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img1?.data?.attributes.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img1")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.[selectedImg]?.data?.attributes.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">₹{data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <div
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    title: data?.attributes?.title,
                    desc: data?.attributes?.desc,
                    img:
                      process.env.REACT_APP_UPLOAD_URL +
                      data?.attributes?.img1?.data?.attributes.url,
                    price: data?.attributes?.price,
                    quantity: quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon />
              ADD TO CART
            </div>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor Polo</span>
              <span>Product Type :T-Shirt</span>
              <span>Tag: T-Shirt ,Women ,Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
