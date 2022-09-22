import React, {Component, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames } from "../Redux/actions";
import { Game } from "./Game";

export function Home (){
const allGames = useSelector(state => state.videogamesList);
const dispatch = useDispatch();
//useEffect(()=>{dispatch(getVideogames())},[dispatch])

function handleClick(e){
    e.preventDefault();
    dispatch(getVideogames());
}

return(
    <React.Fragment>
        <h1>Home</h1>
        <button onClick={e => handleClick(e)}>GET Videogames List</button>
        {allGames?.map(g => {return (
        <Game name={g.name} img={g.background_image} genres={g.genres.map(e => e.name).join(', ')}/>
        )})}
    </React.Fragment>
)};
