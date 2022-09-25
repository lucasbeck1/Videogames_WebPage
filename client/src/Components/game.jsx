import React, {Component} from "react";
import { Link } from "react-router-dom";


export function Game ({name, img, genres, id}){

return(
    <React.Fragment>
        <br/>
        <h4>{name}</h4>
        <p>{genres}</p>
        <img src={img} alt="Img Not Found" width='100px' height='100px'/>
        <Link to={`/detail/${id}`}>Detail</Link>
        <br/>
    </React.Fragment>
)};
