import React, {Component} from "react";
import { Link } from "react-router-dom";


export function Game ({name, img, genres}){

return(
    <React.Fragment>
        <br/>
        <h4>{name}</h4>
        <p>{genres}</p>
        <img src={img} alt="Img Not Found" width='400px' height='400px'/>
        <Link exact to='/detail/ID'>Detail</Link>
        <br/>
    </React.Fragment>
)};
