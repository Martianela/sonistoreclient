import React, { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/LIst/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";
const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const { data, isLoading, err } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=` + catId
  );
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    console.log(isChecked, value);
    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  return (
    <div className="products">
      <div className="left">
        <div className="filterItems">
          <h2>Product Categories</h2>
          {err
            ? "something went wrong"
            : isLoading
            ? "loading"
            : data.map((item) => (
                <div className="inputItem" key={item.id}>
                  <input
                    type="checkbox"
                    id={item?.id}
                    value={item?.id}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor={item?.id}
                    style={{ textTransform: "capitalize" }}
                  >
                    {item?.attributes?.title}
                  </label>
                </div>
              ))}
        </div>
        <div className="filterItems">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItems">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value={"asc"}
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price lowest first</label>
          </div>{" "}
          <div className="inputItems">
            <input
              type="radio"
              id="desc"
              value={"desc"}
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price highest first</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sortBy={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
