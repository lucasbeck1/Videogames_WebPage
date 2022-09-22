import React, {Component} from "react";
import { Link } from "react-router-dom";

export function LandingPage (){

return(
    <React.Fragment>
        <h1>LandingPage</h1>
        <br/>
        <Link exact to='/home'>
            <button>PRESS START</button>
        </Link>
    </React.Fragment>
)};