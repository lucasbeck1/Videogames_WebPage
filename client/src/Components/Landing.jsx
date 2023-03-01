import React from "react";
import { Link } from "react-router-dom";
import s from "./styles/Landing.module.css";
import image from "../assets/joy-2.png";


export function Landing(){

return(
  <React.Fragment>
    <div className={s.page}>
      <div className={s.page2}>
        <div className={s.block1}>
          <div className={s.block2}>
            <h1>WELCOME TO LUCKY GAMER</h1>
            <img src={image} alt="no" className={s.image}/>
            <Link to='/home' >
              <button className={s.btnStart}>START</button>
            </Link>
            <p>Press start to continue</p>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
)};
