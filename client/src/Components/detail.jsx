import React, {Component} from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export function Detail (){
    const detailG = useSelector(state => state.detail)

return(
    <React.Fragment>
        <h2>{detailG.name}</h2>
        <p>Géneros: {detailG.genres.map(e => e.name).join(', ')}</p>
        <p>Lanzamiento: {detailG.released}</p>
        <p>Rating: {detailG.rating}</p>
        <img src={detailG.background_image} alt="Img Not Found" width='200px' height='200px'/>
        <p>{detailG.Description}</p>
    </React.Fragment>
)};