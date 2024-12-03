import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer1">
      <div className="footer-content">
        {/* Column 1: Logo and App Links */}
        <div className="footer-column firstCol">
          <img
            src="images/auth/logo.svg"
            className=""
            height="180"
            width="180"
            alt="mainlogo"
            srcSet=""
          />{" "}
          <div className="googlePlayAppStore">
            <img
              src="/images/footer/app_store.png"
              alt="App Store"
              className="store-img"
            />
            <img
              src="/images/footer/google_play.png"
              alt="Google Play"
              className="store-img"
            />
          </div>
          <p>Company # 490039-445, Registered with House of companies.</p>
        </div>

        {/* Column 2: Subscribe Newsletter */}
        <div className="footer-column">
          <h3>Get Exclusive Deals in your Inbox</h3>
          <div className="subscribe-form">
            <input type="email" placeholder="abc@example.com" />
            <button>Subscribe</button>
          </div>
          <div className="policyText">we wont spam, read our email policy</div>
          <div className="social-icons">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* Column 3: Important Links 1 */}
        <div className="footer-column">
          <h3>Legal Pages</h3>
          <ul>
            <li>
              <a href="#!">Terms and Conditions</a>
            </li>
            <li>
              <a href="#!">Privacy</a>
            </li>
            <li>
              <a href="#!">Cookies</a>
            </li>
            <li>
              <a href="#!">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* Column 4: Important Links 2 */}
        <div className="footer-column">
          <h3>Important Links</h3>
          <ul>
            <li>
              <a href="#!">Get Help</a>
            </li>
            <li>
              <a href="#!">Add your restaurant</a>
            </li>
            <li>
              <a href="#!">Sign up to deliver</a>
            </li>
            <li>
              <a href="#!">Create a business account</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <div className="footer2 ">
        <div className="flex justify-between flex-wrap">
           <span>Order.uk Copyright 2024, All Rights Reserved.</span>
           <div>
              <ul style={{display:'flex', justifyContent:'space-between', gap:'10px', flexWrap:'wrap'}}>
                 <li><a style={{whiteSpace:'nowrap'}} href="">Privacy Policy</a></li>
                 <li><a style={{whiteSpace:'nowrap'}} href="">Terms</a></li>
                 <li><a style={{whiteSpace:'nowrap'}} href="">Pricing</a></li>
                 <li><a href="">Do not sell or share my personal information</a></li>
              </ul>
           </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
