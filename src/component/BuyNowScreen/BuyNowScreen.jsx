import React from 'react'
import buynow from "./image/oops-smiley.jpg"
import {Link} from "react-router-dom"
import "./BuynowScreen.css"

function BuyNowScreen() {
    return (
        <>
        <div className="buynow">
            <h1>𝓘'𝓶 𝔀𝓸𝓻𝓴𝓲𝓷𝓰 𝓱𝓮𝓻𝓮 📝</h1>
            </div>
            <div className="buyshop-image" >
                <img src={buynow} className="buynow-image" />
            </div>
            <div className="link-buynow">
            <Link to="/">Please Go back</Link>
            </div>
            
        </>
    )
}

export default BuyNowScreen
 