import React from "react";
import "./SecondScreen.css";
import { Link } from "react-router-dom";
import secondscreen1 from "./images/f(5).jpg"
import secondscreen2 from "./images/f (1).jpg"
import secondscreen3 from "./images/Movie-Night.jpg"
import secondscreen4 from "./images/pexels-mikhail-nilov-6609107.jpg"


function SecondScren() {
  return (
    <>
      <div className="sidebar">
        <Link to="/">Welcome to Moll Market</Link>
        <Link to="/shoppingscreen">Shopping</Link>
        <Link to="/restro">Restauranat</Link>
        <Link to="/movie">Movie Ticket</Link>
        <Link to="/about">About</Link>
      </div>
     <div className="card">
       <h1>π²π½πΆπ πππππΉ πππ ππΎππ ππ π·ππ πππ?</h1>
     <div className="card-1">
     <div className="container">
     <div className="content">
        <img className="image1" src={secondscreen1} />
        <div className="text">
          <Link to="/shoppingscreen">Shop Now</Link>
        </div>
      </div>
     </div>
     <div className="container">
     <div className="content">
        <img className="image2" src={secondscreen2} />
       <div className="text">
         <Link to="/restro">Restro in</Link>
         </div>
       </div>
     </div>
     </div>
     <div className="card-1">
     <div className="container">
     <div className="content">
        <img className="image3" src={secondscreen3} />
       <div className="text">
         <Link to="/movie">Ticket in</Link>
         </div>
       </div>
     </div>
     <div className="container">
     <div className="content">
        <img className="image4" src={secondscreen4} />
       <div className="text">
         <Link to="/about">About Me</Link>
         </div>
       </div>
     </div>
     </div>
     </div>
    </>
  );
}

export default SecondScren;
