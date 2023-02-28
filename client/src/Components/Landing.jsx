import React from "react";
import { Link } from "react-router-dom";
import s from "./styles/Landing.module.css";


export function Landing(){

return(
  <React.Fragment>
    <div className={s.page}>
      <div className={s.page2}>
        <Link to='/home' >
          <button className={s.btnStart}>START</button>
        </Link>
      </div>
    </div>
  </React.Fragment>
)};
