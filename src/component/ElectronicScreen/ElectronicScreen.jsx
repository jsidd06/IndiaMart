import React from 'react'
import electronicscreen1 from "./image/e (1).jpeg"
import electronicscreen2 from "./image/e (2).jpeg"
import electronicscreen3 from "./image/e (3).jpg"
import electronicscreen4 from "./image/e (4).jpg"
import electronicscreen5 from "./image/e (5).jpg"
import electronicscreen6 from "./image/e (6).jpg"
import electronicscreen7 from "./image/e (7).jpg"
import electronicscreen8 from "./image/e (8).jpg"
import electronicscreen9 from "./image/e (9).jpg"
import electronicscreen10 from "./image/e (10).jpg"
import electronicscreen11 from "./image/e (11).png"
import electronicscreen12 from "./image/e (12).jpg"
import {Link} from "react-router-dom"

function ElectronicScreen() {
    return (
      <>
      <div className="heading">
          <h1>Which electronic item would you like to buy?</h1>
      </div>
      <div className="box">
          <div className="box-1">
              <img className="box-image" src={electronicscreen1} /><br/>
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={electronicscreen2} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={electronicscreen3} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={electronicscreen4} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={electronicscreen5} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={electronicscreen6} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={electronicscreen7} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={electronicscreen8} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={electronicscreen9} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={electronicscreen10} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={electronicscreen11} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={electronicscreen12} />
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BookNow</Link>
              </div>
          </div>
      </div>
      </>
    )
}

export default ElectronicScreen
