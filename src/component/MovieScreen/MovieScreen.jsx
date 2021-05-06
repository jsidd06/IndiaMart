import React from 'react'
import "./MovieScreen.css"
import {Link} from "react-router-dom"
import movie1 from "./images/03-nbd-dm-mainstage-mobile-banner-1080x793-ra-f022221-60354670e5a33-1.jpg"
import movie2 from "./images/641331-h.jpeg"
import movie3 from "./images/827508-h.jpeg"
import movie4 from "./images/Allu-Arjun-s-AlaVaikunthapurram-loo-movie-will-be-streaming-on-Sun-NXT-from-26th-Feb-2020-.jpg"
import movie5 from "./images/Endgame-Lead-1.jpg"
import movie6 from "./images/maxresdefault (1).jpg"
import movie7 from "./images/Mumbai-Saga-release-live-1200.jpg"
import movie8 from "./images/ultimate-summer-movie-season.jpg"


function MovieScreen() {
    return (
       <>
       <div className="heading">
            <h1>Welcome to India Mart Movie Hall?</h1>
        </div>
        <div className="box">
            <div className="box-1">
                <img className="box-image" src={movie1} /><br/>
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={movie2} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={movie3} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={movie4} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={movie5} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={movie6} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={movie7} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={movie8} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
        </div>
       </>
    )
}

export default MovieScreen
