import React from 'react'
import {Link} from "react-router-dom"
import sound1 from "./image/01-sx51br-main.jpg"
import sound2 from "./image/Benefits-of-Surround-Sound.jpg"
import sound3 from "./image/images.jpeg"
import sound4 from "./image/istockphoto-487205823-612x612.jpg"
import sound5 from "./image/m1200-palco-sound-system-original-imagyhz4hycc2g5q.jpeg"
import sound6 from "./image/product-jpeg-500x500.jpg"
import sound7 from "./image/PV112CCHBUN_1d3b29f4-a968-41db-bc2b-b34c82005fa8.jpg"
import sound8 from "./image/sound-system-260nw-150359012.jpg"
import sound9 from "./image/sound-system1413209820.jpg"
import sound10 from "./image/z607-merida-pdp2.png"

function SoundScreen() {
    return (
        <>
        <div className="heading">
            <h1>Which Sound system would you like to buy?</h1>
        </div>
        <div className="box">
            <div className="box-1">
                <img className="box-image" src={sound1} /><br/>
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={sound2} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={sound3} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={sound4} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={sound5} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={sound6} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={sound7} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={sound8} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={sound9} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
            <div className="box-1">
                <img className="box-image" src={sound10} />
                <div className="text-5">
                    <Link to="/buynow" className="button-5">BookNow</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default SoundScreen
