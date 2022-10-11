import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export function Detail (){
    const detailG = useSelector(state => state.detail);

    let algo = detailG.genres;

    if(detailG.createdInDatabase === true){       
        algo = detailG.genres.map(g=>g.name).join(', ');
    };

return(
    <React.Fragment>
        <Link to={`/home`}><p>Home</p></Link>
        <h2>{detailG.name}</h2>
        <p>Genres: {algo}</p>
        <p>Platforms: {detailG.platforms}</p>
        <p>Date of release: {detailG.released}</p>
        <p>Rating: {detailG.rating}</p>
        <img src={detailG.image} alt="Img Not Found" width='200px' height='200px'/>
        <p>{detailG.description}</p>
    </React.Fragment>
)};