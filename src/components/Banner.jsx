import React, { useEffect } from 'react';
import "../CSS/Banner.css";
import { Link } from 'react-router-dom';

function Banner() {

  return (
    <div className="banner_container">
        <div className="banner-background">
          <img src="https://cdn.discordapp.com/attachments/445928139021877259/1188387888090595369/The-MATTER-x-Meat-Avatar_ver1-2_fb_copy.png?ex=659a5777&is=6587e277&hm=7cf26695bb844a6cb7e116bc04ec9087a4a577262925c2dc841317e4db9f3778&" alt="Meat avatar banner" />
          <div className="banner_info">
            <div className="bannerlogo"><img src="https://cdn.discordapp.com/attachments/445928139021877259/1186552066605322339/meat-avartar_logo.png?ex=6593a9b9&is=658134b9&hm=9536dfe76a26991593b1148371ca870c7b2a3833be0cb62f64f116c478df5884&" alt="Meat avatar logo" /></div>
            <div className="bannerlogoname">Meat Avatar</div>
            <div className="bannerbrandinfo">เนื้อจากพืชเพื่อสุขภาพที่ดี</div>
          </div>
        </div>
    </div>
  )
}

export default Banner;
