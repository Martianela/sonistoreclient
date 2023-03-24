import React from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./List.scss";
const List = ({ maxPrice, sortBy, subCats, catId }) => {
  const { data, isLoading, err } = useFetch(
    `/products?populate=* &[filters][categories][id]=` +
      catId +
      `${subCats.map(
        (item) => `&[filters][sub_categories][id][$eq]=${item}`
      )}&[filters][price][$lte]=${maxPrice}&sort=price:${sortBy}`
  );
  console.log(data);
  return (
    <div className="list">
      {err
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((item) => (
            <>
              <Card item={item} key={item.id} />
            </>
          ))}
    </div>
  );
};

export default List;
