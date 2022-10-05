import React, {Component} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export function Detail (){
    const detailG = useSelector(state => state.detail)

return(
    <React.Fragment>
        <h2>{detailG.name}</h2>
        <p>Géneros: {detailG.genres}</p>
        <p>Lanzamiento: {detailG.released}</p>
        <p>Rating: {detailG.rating}</p>
        <img src={detailG.img} alt="Img Not Found" width='200px' height='200px'/>
        <p>{detailG.Description}</p>
    </React.Fragment>
)};