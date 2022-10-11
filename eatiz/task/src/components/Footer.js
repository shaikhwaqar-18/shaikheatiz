import React from "react";

function Footer() {
  return (
    <div className="footer_container">
      <div  className="applogo">
        <div data-aos="fade-up"
     data-aos-duration="3000" className="applogo1">
          <h2
            className="head"
           
          >
            Download app for Exciting Deals
          </h2>
        </div>
        <p className="foot-para" data-aos="fade-up"
     data-aos-duration="3000" style={{ width: "20rem", marginLeft: "6rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam
          egestas magna, condimentum placerat enim elementum
        </p>
        <img data-aos="fade-up"
     data-aos-duration="3000" className="mob" src="./assets/mobile.png"></img>
      </div>

      <a href="">
        <img data-aos="fade-up"
     data-aos-duration="3000" className="button1" src="./assets/android.png"></img>
      </a>
      <a href="">
        <img data-aos="fade-up"
     data-aos-duration="3000"
          className="button"
          src="./assets/apple.png"
        ></img>
      </a>
    </div>
  );
}

export default Footer;
