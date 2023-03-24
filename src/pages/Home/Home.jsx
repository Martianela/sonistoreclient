import React from "react";
import Categories from "../../components/Categories/Categories";
import Contect from "../../components/Contect/Contect";
import FeaturedProduct from "../../components/FeatureProducts/FeaturedProduct";
import Slider from "../../components/Sllider/Slider";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProduct type={"featured"} />
      <Categories />
      <FeaturedProduct type={"trending"} />
      <Contect />
    </div>
  );
};

export default Home;
