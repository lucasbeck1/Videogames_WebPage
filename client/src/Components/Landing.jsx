import React from "react";
import { Link } from "react-router-dom";
import s from "./Landing.module.css";


export function Landing(){

return(
    <React.Fragment>
        <div className={s.page}>
            <div className={s.page2}>
                <Link exact to='/home' >
                    <button className={s.btnStart}>START</button>
                </Link>
            </div>
        </div>
    </React.Fragment>
)};