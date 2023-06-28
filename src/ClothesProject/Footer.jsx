import React from "react";
import twitter from '../images/twitter.png'
import instagram from '../images/instagram 2.png'
import facebook from '../images/facebook.png'
const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div>
          <h3>Contact</h3>
          <li>
            <a href="#">Phone: +2349021004201</a>
          </li>
          <li>
            <a href="#"> Address: Number 9 alhaji Araba Street Eleshin Elepe</a>
          </li>
        </div>
        <div>
          <h3>About</h3>
          <li>
            <a href="#"> About us</a>
          </li>
          <li>
            <a href="#"> Delivery Information</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms and Condition</a>
          </li>
        </div>
        <div>
          <h3>My Account </h3>
          <li>
            <a href="#"> Sign in </a>
          </li>
          <li>
            <a href="#">My Whishlist</a>
          </li>
          <li>
            <a href="#">Track my Orders</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </div>
        <div>
            <h3>Follow us </h3>
            <li><a href="#"><img src={twitter} /></a></li>
            <li><a href="#"><img src={instagram} /></a></li>
            <li><a href="#"><img src={facebook} /></a></li>

        </div>
      </footer>
      <div className="copy">      <a href=""className="copy" >@copywright 2023 coded by {'<>oluwadamilare</>'}</a>
</div>
    </div>
  );
};

export default Footer;
