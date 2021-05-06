import React from 'react'
import {Link} from "react-router-dom"
import "./HomeScreen.css"
import video1 from "./video/work1.mp4"
import video2 from "./video/work.mp4"
import video3 from "./video/video.mp4"
import video4 from "./video/pexels-pavel-danilyuk-7233535.mp4"
import video5 from "./video/video (2).mp4"

function HomeScreen() {
    return (
        <>
        <div className="container">
                <video loop autoPlay className="video" src={video1}></video>
                <div className="button">
                    <Link to="/moll-market">Welcome to India Mart Mall</Link>
                </div>
            </div>
        <div className="container">
                <video loop autoPlay className="video" src={video2}></video>
                <div className="button">
                    <Link to="/shoppingscreen">Shopping</Link>
                </div>
            </div>
        <div className="container">
                <video loop autoPlay className="video" src={video3}></video>
                <div className="button">
                    <Link to="/restro">Restaurant</Link>
                </div>
            </div>
        <div className="container">
                <video loop autoPlay className="video" src={video4}></video>
                <div className="button">
                    <Link to="/movie">Movie Ticket</Link>
                </div>
            </div>
        <div className="container">
                <video loop autoPlay className="video" src={video5}></video>
                <div className="button">
                    <Link to="/about">About Me</Link>
                </div>
            </div>
        </>
    )
}

export default HomeScreen
