import React, {Component} from "react";
import { Link } from "react-router-dom";


export function Detail ({Gname, GImg, GGenres, GDescription, GDate, GRating}){

return(
    <React.Fragment>
        <h2>{Gname}</h2>
        <p>Géneros: {GGenres}</p>
        <p>Lanzamiento: {GDate}</p>
        <p>Rating: {GRating}</p>
        <img src={GImg} alt="Img Not Found" width='200px' height='200px'/>
        <p>{GDescription}</p>
    </React.Fragment>
)};