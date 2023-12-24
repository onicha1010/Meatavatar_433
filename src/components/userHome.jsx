import React, { Component, useEffect, useState } from "react";
import Menubra from './Menubra'
import Banner from './Banner'
import Footer from './Footers'
import Journey from './Journey'
import IntroProduct from './IntroProduct'
import Imagebrand from './Imagebrand'
import Partner from './Partner'
import "../CSS/Userhome.css";



export default function UserHome() {

  return (
    <div className="wrapper">
    <div className="auth-wrapper">
      <div className="auth-inner">
        <Menubra/>
        <Banner/>
        <div className="journey-header">
                <p>FOLLOW  OUR  JOURNEYS</p>
            </div>
        <Journey/>
        <div className="journey-header">
                <p>PRODUCT</p>
            </div>
        <Imagebrand/>
        <div className="imagebrand-recommend">
            <div className="plantbase-recommend">
              <b>เมนูที่แนะนํา</b>
              <p>Plant Based Crispy Pock</p>
              <p>Plant Based Minced Pock</p>
              <p>Plant-Based Ground Beef</p>
              <p>Plant-Based Ground Beef</p>
            </div>
            <div className="plantbase-recommend">
              <b>เมนูที่แนะนํา</b>
              <p>Plant Based Crispy Pock</p>
              <p>Plant Based Minced Pock</p>
              <p>Plant-Based Ground Beef</p>
              <p>Plant-Based Ground Beef</p>
            </div>
            </div>
        <IntroProduct/>
        <Partner/>
      </div>
    <Footer/>
    </div>
    </div>
  );
}
