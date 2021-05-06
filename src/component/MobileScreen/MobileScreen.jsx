import React from 'react'
import {Link} from "react-router-dom"
import mobile1 from "./images/m (1).jpeg"
import mobile2 from "./images/m (1).jpg"
import mobile3 from "./images/m (1).png"
import mobile4 from "./images/m (2).jpg"
import mobile5 from "./images/m (3).jpg"
import mobile6 from "./images/m (4).jpg"
import mobile7 from "./images/m (5).jpg"
import mobile8 from "./images/m (6).jpg"
import mobile9 from "./images/m (7).jpg"
import mobile10 from "./images/m (8).jpg"

function MobileScreen() {
    return (
      <>
      <div className="heading">
          <h1>Which mobile would you like to buy?</h1>
      </div>
      <div className="box">
          <div className="box-1">
              <img className="box-image" src={mobile1} /><br/>
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={mobile2} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={mobile3} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={mobile4} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={mobile5} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={mobile6} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={mobile7} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={mobile8} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={mobile9} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={mobile10} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
      </div>
      </>
    )
}

export default MobileScreen
