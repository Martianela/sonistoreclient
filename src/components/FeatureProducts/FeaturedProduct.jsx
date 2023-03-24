import React from "react";
import Card from "../Card/Card";
import "./FeaturedProduct.scss";
import useFetch from "../../hooks/useFetch";
const FeaturedProduct = ({ type }) => {
  const { data, isLoading, err } = useFetch(
    "/products?populate=*&[filters][type][$eq]=" + type
  );
  console.log(data);
  return (
    <div className="featuredProduct">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          expedita sequi ipsam numquam eaque doloribus, voluptatum magni maxime
          nobis minus! Autem ea, illum quo tenetur numquam molestias laudantium
          commodi temporibus.
        </p>
      </div>
      <div className="bottom">
        {err
          ? "something went wrong"
          : isLoading
          ? "loading"
          : data.map((item) => {
              return <Card item={item} key={item.id} />;
            })}
      </div>
    </div>
  );
};

export default FeaturedProduct;
