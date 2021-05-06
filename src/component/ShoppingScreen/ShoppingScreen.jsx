import React from 'react'
import "./ShoppingScreen.css"
import {Link} from "react-router-dom"
import photo1 from "./images/best-men-online-shopping-jcrew-luxe-digital.jpg"
import photo2 from "./images/e (8).jpg"
import photo3 from "./images/electronic-gadgets.jpeg"
import photo4 from "./images/g (9).jpeg"
import photo5 from "./images/indybest-best-sustainable-clothing-brands.jpg"
import photo6 from "./images/m (1).png"
import photo7 from "./images/k (3).jpeg"
import photo8 from "./images/medicine (7).jpg"

function ShoppingScreen() {
    return (
        <>
        <div className="heading">
            <h1>Welcome to India Mart Shopping Mall?</h1>
        </div>
        <div className="box">
            <div className="box-1">
                <img className="box-image" src={photo1} /><br/>
                <div className="text-5">
                    <Link to="/menshopscreen" className="button-5">Boys Shop</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={photo2} />
                <div className="text-5">
                    <Link to="/soundscreen" className="button-5">Sound Shop</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={photo3} />
                <div className="text-5">
                    <Link to="/electronicscreen" className="button-5">Electronic Shop</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={photo4} />
                <div className="text-5">
                    <Link to="/grorcyscreen" className="button-5">Grocry Shop</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={photo5} />
                <div className="text-5">
                    <Link to="/womenshop" className="button-5">Women Shop</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={photo6} />
                <div className="text-5">
                    <Link to="/mobile" className="button-5">Mobile Shop</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={photo7} />
                <div className="text-5">
                    <Link to="/kitchen" className="button-5">Kitchen Shop</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={photo8} />
                <div className="text-5">
                    <Link to="/medicine" className="button-5">Medicine Shop</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default ShoppingScreen
