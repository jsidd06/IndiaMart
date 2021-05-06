import React from 'react'
import "./RestroScreen.css"
import {Link} from "react-router-dom"
import restro1 from "./images/pexels-aisha-serafini-5714752.jpg"
import restro2 from "./images/pexels-edward-eyer-2923034.jpg"
import restro3 from "./images/pexels-ksenia-chernaya-4450334.jpg"
import restro4 from "./images/pexels-mateusz-dach-3660229.jpg"
import restro5 from "./images/pexels-quark-studio-3201920.jpg"
import restro6 from "./images/pexels-rachel-claire-4577179.jpg"
import restro7 from "./images/pexels-valeria-boltneva-1484516.jpg"
import restro8 from "./images/pexels-waldemar-brandt-2290070.jpg"

function RestroScreen() {
    return (
        <>
        <div className="heading">
            <h1>Welcome to India Mart Restaurant?</h1>
        </div>
        <div className="box">
            <div className="box-1">
                <img className="box-image" src={restro1} /><br/>
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={restro2} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={restro3} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={restro4} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={restro5} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={restro6} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={restro7} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={restro8} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default RestroScreen
