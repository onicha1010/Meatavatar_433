import React from 'react';
import '../CSS/IntroProduct.css';
import { Link } from 'react-router-dom';
function IntroProduct() {
  return (
    <div className="intro-product">
        <div className="intro_info">
          <div className="intro_left_info">
            <div className="brandname">
              <b>Meat Avatar</b>
            </div>
            <b>มีประโยชน์และดีอย่างไร?</b>
            <div className="brandtext"></div>
          </div>
          <div className="intro_right_info">
            <div className="benefit_of_product">
              <p>กระบวนการทําน้อย</p>
              <p>คาร์โบไฮเดรตตํ่า</p>
              <p>โซเดียมน้อย</p>
              <b>แต่โปรตีนสูง</b>
            </div>
          </div>
        </div>
    </div>
  );
}

export default IntroProduct;
