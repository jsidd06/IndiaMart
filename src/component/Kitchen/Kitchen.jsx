import React from 'react'
import kitechen1 from "./images/k (1).jpeg"
import kitechen2 from "./images/k (2).jpeg"
import kitechen3 from "./images/k (3).jpeg"
import kitechen4 from "./images/k (4).jpg"
import kitechen5 from "./images/k (5).jpg"
import kitechen6 from "./images/k (6).png"
import kitechen7 from "./images/k (7).jpg"
import kitechen8 from "./images/k (8).png"
import kitechen9 from "./images/k (9).jpg"
import {Link} from "react-router-dom"

function Kitchen() {
    return (
      <>
      <div className="heading">
          <h1>Which Kitchen item would you like to buy?</h1>
      </div>
      <div className="box">
          <div className="box-1">
              <img className="box-image" src={kitechen1} /><br/>
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={kitechen2} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={kitechen3} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={kitechen4} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={kitechen5} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={kitechen6} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={kitechen7} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={kitechen8} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={kitechen9} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
      </div>
      </>
    )
}

export default Kitchen
