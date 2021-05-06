import React from 'react'
import womenscreen1 from "./images/w (1).jpeg"
import womenscreen2 from "./images/w (2).jpeg"
import womenscreen3 from "./images/w (3).jpg"
import womenscreen4 from "./images/w (4).jpg"
import womenscreen5 from "./images/w (5).jpg"
import womenscreen7 from "./images/w (6).jpg"
import womenscreen8 from "./images/w (8).jpg"
import womenscreen9 from "./images/w (9).jpg"
import womenscreen10 from "./images/w (10).png"
import womenscreen11 from "./images/w (11).jpg"
import {Link} from "react-router-dom"

function WomenScreen() {
    return (
      <>
      <div className="heading">
          <h1>Which clothe would you like to buy?</h1>
      </div>
      <div className="box">
          <div className="box-1">
              <img className="box-image" src={womenscreen1} /><br/>
              <div className="text-5">
                  <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={womenscreen2} />
              <div className="text-5">
              <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={womenscreen3} />
              <div className="text-5">
              <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={womenscreen4} />
              <div className="text-5">
              <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={womenscreen5} />
              <div className="text-5">
              <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={womenscreen7} />
              <div className="text-5">
              <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={womenscreen8} />
              <div className="text-5">
              <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={womenscreen9} />
              <div className="text-5">
              <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={womenscreen10} />
              <div className="text-5">
              <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
          <div className="box-1">
              <img className="box-image" src={womenscreen11} />
              <div className="text-5">
              <Link to="/buynow" className="button-5">BuyNow</Link>
              </div>
          </div>
      </div>
      </>
    )
}

export default WomenScreen
