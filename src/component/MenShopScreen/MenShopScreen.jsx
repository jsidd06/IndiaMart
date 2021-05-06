import React from 'react'
import {Link} from "react-router-dom"
import men1 from "./images/men (1).jpeg"
import men2 from "./images/men (10).jpg"
import men3 from "./images/men (11).jpg"
import men4 from "./images/men (2).jpeg"
import men5 from "./images/men (3).jpeg"
import men6 from "./images/men (4).jpg"
import men7 from "./images/men (5).jpg"
import men8 from "./images/men (6).jpg"
import men9 from "./images/men (7).jpg"
import men10 from "./images/men (8).jpg"
import men11 from "./images/men (9).png"

function MenShopScreen() {
    return (
        <>
        <div className="heading">
            <h1>Which clothe would you like to buy?</h1>
        </div>
        <div className="box">
            <div className="box-1">
                <img className="box-image" src={men1} /><br/>
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={men2} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={men3} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={men4} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={men5} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={men6} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={men7} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={men8} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={men9} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={men10} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={men11} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default MenShopScreen
