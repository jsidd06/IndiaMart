import React from 'react'
import GrorcyScreen1 from "./images/g (1).jpeg"
import GrorcyScreen8 from "./images/g (8).jpg"
import GrorcyScreen2 from "./images/g (2).jpg"
import GrorcyScreen9 from "./images/g (9).jpeg"
import GrorcyScreen10 from "./images/g (10).jpeg"
import GrorcyScreen3 from "./images/g (3).jpg"
import GrorcyScreen4 from "./images/g (4).jpg"
import GrorcyScreen5 from "./images/g (5).jpg"
import GrorcyScreen6 from "./images/g (6).jpg"
import GrorcyScreen7 from "./images/g (7).jpg"
import {Link} from "react-router-dom"

function GrorcyScreen() {
    return (
      <>
      <div className="heading">
          <h1>Which Grocry item would you like to buy?</h1>
      </div>
      <div className="box">
          <div className="box-1">
              <img className="box-image" src={GrorcyScreen1} /><br/>
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={GrorcyScreen2} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={GrorcyScreen3} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={GrorcyScreen4} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={GrorcyScreen5} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={GrorcyScreen6} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={GrorcyScreen7} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={GrorcyScreen8} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={GrorcyScreen9} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={GrorcyScreen10} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
      </div>
      </>
    )
}

export default GrorcyScreen
