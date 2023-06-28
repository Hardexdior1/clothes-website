import React, { useRef, useState } from "react";
import "./Banner.css";
import lacoste from "../images/img1.jpg";
import adidas from "../images/img2.jpg";
import gucci from "../images/img1.jpg";
import nike from "../images/img2.jpg";

import Link from "react-dom";
// the link is not importing so i have to use anchor tag for the link

// nothing gives me joy like attaching and eventListener to window 

const Banner = () => {
  const [showMenu, setShowMenu] = useState(true);


  const toggleNav = useRef();

  const headerFixed = useRef();

  const linkColor1 = useRef();
  const linkColor2 = useRef();
  const linkColor3 = useRef();
  const linkColor4 = useRef();

  const logoColor=useRef()
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      headerFixed.current.classList.remove("header");
      headerFixed.current.classList.add("headerFixed");

      linkColor1.current.classList.remove("link");
      linkColor1.current.classList.add("a");
      linkColor2.current.classList.remove("link");
      linkColor2.current.classList.add("a");

      linkColor3.current.classList.remove("link");
      linkColor3.current.classList.add("a");

      linkColor4.current.classList.remove("link");
      linkColor4.current.classList.add("a");

      logoColor.current.classList.remove('logo')
      logoColor.current.classList.add('logoChange')

    } else {
      headerFixed.current.classList.add("header");
      headerFixed.current.classList.remove("headerFixed");

      linkColor1.current.classList.add("link");
      linkColor1.current.classList.remove("a");
      linkColor2.current.classList.add("link");
      linkColor2.current.classList.remove("a");

      linkColor3.current.classList.add("link");
      linkColor3.current.classList.remove("a");

      linkColor4.current.classList.add("link");
      linkColor4.current.classList.remove("a");

      logoColor.current.classList.add('logo')
      logoColor.current.classList.remove('logoChange')
    }
  });

  return (
    <div>
      <header className="header" ref={headerFixed}>
        <nav className="navBar">
          <a href="#" className="logo">
            {" "}
            <h1 ref={logoColor}>myStore </h1>
          </a>
          <ul className="unorderedList" ref={toggleNav}>
            <li>
              <a ref={linkColor1} className="link" href="#">
                Home
              </a>
            </li>
            <li>
              <a ref={linkColor2} className="link" href="#">
                About
              </a>
            </li>
            <li>
              <a ref={linkColor3} className="link" href="#">
                Feature
              </a>
            </li>

            <li>
              <a ref={linkColor4} className="link" href="#">
                Company
              </a>
            </li>
          </ul>

          {showMenu ? (
            <div
              className="menu"
              onClick={() => {
                toggleNav.current.classList.remove("unorderedList");
                toggleNav.current.classList.add("showNav");
                setShowMenu(false);
              }}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <div
              className="menu"
              onClick={() => {
                toggleNav.current.classList.add("unorderedList");
                toggleNav.current.classList.remove("showNav");
                setShowMenu(true);
              }}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </nav>
      </header>
      <div className="carouselFlex">
        <div className="left-align">
          <h1>Trade-in-offers</h1>
          <h3>Super Value deals On all Products</h3>
          <h3>
            save more with coupons & up to{" "}
            <span className="off">70% off !</span>{" "}
          </h3>
        </div>
        <div className="first">
          <div className="container">
            <div className="content">
              <div className="carousel-content"></div>
              <div className="slideshow">
                <button className="slide-btn slide-btn-1"></button>
                <button className="slide-btn slide-btn-2"></button>
                <button className="slide-btn slide-btn-3"></button>
                <button className="slide-btn slide-btn-4"></button>
                <div className="slideshow-wrapper">
                  <div class="slide">
                    <img
                      className="slide-img"
                      src={lacoste}
                      loading="lazy"
                      alt="img"
                    />
                  </div>
                  <div className="slide">
                    <img
                      className="slide-img"
                      src={adidas}
                      loading="lazy"
                      alt="img"
                    />
                  </div>
                  <div className="slide">
                    <img
                      classN="slide-img"
                      src={nike}
                      loading="lazy"
                      alt="img"
                    />
                  </div>
                  <div className="slide">
                    <img
                      className="slide-img"
                      src={gucci}
                      loading="lazy"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
