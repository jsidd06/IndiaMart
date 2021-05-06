import React from 'react'
import medicinescreen1 from "./images/medicine (1).jpeg"
import medicinescreen2 from "./images/medicine (2).jpeg"
import medicinescreen3 from "./images/medicine (3).jpg"
import medicinescreen4 from "./images/medicine (4).jpg"
import medicinescreen5 from "./images/medicine (5).jpg"
import medicinescreen6 from "./images/medicine (6).jpg"
import medicinescreen7 from "./images/medicine (7).jpg"
import medicinescreen8 from "./images/medicine (8).jpg"
import medicinescreen9 from "./images/medicine (9).jpg"
import {Link} from "react-router-dom"

function MedicineScreen() {
    return (
      <>
      <div className="heading">
          <h1>Which medicine you have to buy?</h1>
      </div>
      <div className="box">
          <div className="box-1">
              <img className="box-image" src={medicinescreen1} /><br/>
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={medicinescreen2} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={medicinescreen3} />
              <div className="text-5">
              <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={medicinescreen4} />
              <div className="text-5">
              <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={medicinescreen5} />
              <div className="text-5">
              <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={medicinescreen6} />
              <div className="text-5">
              <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={medicinescreen7} />
              <div className="text-5">
              <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={medicinescreen8} />
              <div className="text-5">
              <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={medicinescreen9} />
              <div className="text-5">
              <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
      </div>
      </>
    )
}

export default MedicineScreen
