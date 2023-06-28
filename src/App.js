import "./App.css";
import React, { useState } from "react";
import Data from "./ClothesProject/Data";
import Main from "./ClothesProject/Main";
import Categories from "./ClothesProject/Categories";
import Banner from "./ClothesProject/Banner";
import Footer from "./ClothesProject/Footer";
import whatsApp from "./images/4494495.png";
import SeasonalSale from "./ClothesProject/SeasonalSale";
const allCategories = ["All", ...new Set(Data.map((item) => item.category))];
function App() {
  const [data, setData] = useState(Data);
  const [
    numberOfEachCategoryClothesAvailable,
    setNumberOfEachCategoryClothesAvailable,
  ] = useState("");
  const [showLengthOfClothesAvailable, setShowLengthOfClothesAvailable] =
    useState(false);
  const [eachCategory, setEachCategory] = useState("");
  const [category, setCategory] = useState(allCategories);
  const filterItemInEachCategory = (category) => {
    if (category == "All") {
      setData(Data);
      setNumberOfEachCategoryClothesAvailable("");
      setShowLengthOfClothesAvailable(false);
      return;
    }
    const newItems = Data.filter((item) => item.category === category);
    setNumberOfEachCategoryClothesAvailable(newItems.length);
    setData(newItems);
    setShowLengthOfClothesAvailable(true);
    setEachCategory(category);
  };
  const ThirtyDollarsDownWardsProduct = () => {
    const ThirtyDollars = data.filter(
      (ThirtyDollarsProduct) => ThirtyDollarsProduct.price <= 30
    );
    if (ThirtyDollars.price > 30) {
      console.log("not available ");
    }
    setData(ThirtyDollars);
  };
  return (
    <div className="App">
      <Banner />
      <div className="marquee">
        <marquee behavior="normal" direction="left">
          We sell quality,cheap and affordable products to our customers !!!
        </marquee>
      </div>

      <Categories category={category} filterItems={filterItemInEachCategory} />
      {showLengthOfClothesAvailable ? (
        <div>
          {" "}
          {data.length > 1 ? (
            <h5 className="numberOfProductAvailable">
              {numberOfEachCategoryClothesAvailable} products available for{" "}
              {eachCategory}{" "}
            </h5>
          ) : (
            <h5 className="numberOfProductAvailable">
              {numberOfEachCategoryClothesAvailable} product available for{" "}
              {eachCategory}{" "}
            </h5>
          )}
        </div>
      ) : (
        ""
      )}
      <div className="initialFlex">
        {data.map((eachDatum) => {
          return (
            <Main
              key={eachDatum.id}
              {...eachDatum}
              ThirtyDollarsDownWardsProduct={ThirtyDollarsDownWardsProduct}
            />
          );
        })}
      </div>
      <section className="service">
        <h1>Repair Service</h1>
        <h3>
          Up to <span className="off2">30% Off</span> - All t-Shirts &
          Accessories
        </h3>
      </section>


      <SeasonalSale />

      <Footer />

      {/* <img src={whatsApp} alt="icon"  className="whatsApp"/> */}

      {/* <a href="">REFRSEh</a> */}
    </div>
  );
}
export default App;
