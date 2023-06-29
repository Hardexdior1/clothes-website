import React, { useState } from "react";
import "./Main.css";
const Main = ({
  mainImg,
  productName,
  category,
  description,
  subMain1,
  subMain2,
  MainImgForThirtyDollarsDownWards,
  subImgForThirtyDollarsImg1,
  subImgForThirtyDollarsImg2,
  id,
  price,
  price2,
  normalPrice2,
  normalPrice3,
  subNormalPrice1,
  subNormalPrice2,
lowMoney

}) => {
  const [mainImg1, setMainImg] = useState(mainImg);
  const [showDefaultImg, setShowDefaultImg] = useState(false);
  const [normalPriceProducts, setNormalPriceProduct] = useState(true);
  const [productPrice, setProductPrice] = useState(price);
  const [productPrice2, setProductPrice2] = useState(price2);
  const [showThirtyToTenDollarsProduct, setShowThirtyToTenDollarsProduct] =
    useState(false);
    console.log(lowMoney);
  const [
    mainImgForThirtyDollarsDownWardProducts,
    setMainImgForThirtyDollarsDownWardProducts,
  ] = useState(MainImgForThirtyDollarsDownWards);
  const [
    defaultImgForThirtyDollarsDownWardProducts,
    setDefaultImgForThirtyDollarsDownWardProducts,
  ] = useState(false);
  const thirtyToTenDollarsGoods = () => {
    setShowThirtyToTenDollarsProduct(true);
    setNormalPriceProduct(false);
  };
  const [ShowNormalPriceBtn, setShowNormalPriceBtn] = useState(false);
  const backToNormalPrice = () => {
    setNormalPriceProduct(true);
    setShowThirtyToTenDollarsProduct(false);
    setProductPrice(price);
    setShowNormalPriceBtn(true);
  };
  return (
    <div className="wrap">
      <div className="hide">
        {normalPriceProducts ? (
          <div className="subFlex border ">
            <div>
              <img className="main-img" src={mainImg1} alt={category} />
              <div className="productNameAndPriceFlex">
                <h4 className="productName">{productName}</h4>
                <h4 className="price">${productPrice}</h4>
              </div>
            </div>
            <div className="imageFlex">
              <div>
                <img
                  onClick={() => {
                    setMainImg(subMain1);
                    setShowDefaultImg(true);
                    setProductPrice(normalPrice2);
                    //   setShowSubMain1(false)
                  }}
                  src={subMain1}
                  alt={category}
                />
              </div>
              <div>
                <img
                  onClick={() => {
                    setMainImg(subMain2);
                    setShowDefaultImg(true);
                    setProductPrice(normalPrice3);
                  }}
                  src={subMain2}
                  alt={category}
                />
              </div>
              {showDefaultImg ? (
                <div>
                  <img
                    onClick={() => {
                      setMainImg(mainImg);
                      // setShowSubMain1(true)
                      setProductPrice(price);
                      setShowDefaultImg(false);
                    }}
                    src={mainImg}
                    alt={category}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}
        {showThirtyToTenDollarsProduct ? (
          <div className="subFlex border ">
            <div>
              <img
                className="main-img"
                src={mainImgForThirtyDollarsDownWardProducts}
                alt={category}
              />
              <div className="productNameAndPriceFlex">
                <h4 className="productName">{productName}</h4>
                <h4 className="price">${productPrice2}</h4>
              </div>
            </div>
            <div className="imageFlex">
              <div>
                <img
                  onClick={() => {
                    setProductPrice2(subNormalPrice1);
                    setDefaultImgForThirtyDollarsDownWardProducts(true);
                    setMainImgForThirtyDollarsDownWardProducts(
                      subImgForThirtyDollarsImg1
                    );
                  }}
                  src={subImgForThirtyDollarsImg1}
                  alt={category}
                />
              </div>
              <div>
                <img
                  onClick={() => {
                    setDefaultImgForThirtyDollarsDownWardProducts(true);
                    setProductPrice2(subNormalPrice2);
                    setMainImgForThirtyDollarsDownWardProducts(
                      subImgForThirtyDollarsImg2
                    );
                  }}
                  src={subImgForThirtyDollarsImg2}
                  alt={category}
                />
              </div>
              {defaultImgForThirtyDollarsDownWardProducts ? (
                <div>
                  <img
                    onClick={() => {
                      setMainImgForThirtyDollarsDownWardProducts(
                        MainImgForThirtyDollarsDownWards
                      );
                      setDefaultImgForThirtyDollarsDownWardProducts(false);
                      setProductPrice2(price2);
                    }}
                    src={MainImgForThirtyDollarsDownWards}
                    alt={category}
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}
        <div>
          <div>
           {lowMoney? <div className="btn-carrier">
              <button
                onClick={() => {
                  console.log(price);
                  setShowNormalPriceBtn(true);
                  thirtyToTenDollarsGoods();
                }}>
                10-40$
              </button>
              {ShowNormalPriceBtn ? (
                <button
                  onClick={() => {
                    backToNormalPrice();
                    setShowNormalPriceBtn(false);
                  }}>
                  back to normal price
                </button>
              ) : (
                ""
              )}
            </div>:''}
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Main;