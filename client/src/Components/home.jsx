import React, {Component, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames } from "../Redux/actions";
import { Game } from "./Game";
import { Paginated } from "./Paginated";

export function Home (){

// Global states
const allGames = useSelector(state => state.videogamesList);
const dispatch = useDispatch();
//useEffect(()=>{dispatch(getVideogames())},[dispatch]);

// Local states (paginated)
const [currentPage, setCurrentPage] = useState(1);
const [gamesPerPage, setGamesPerPage] = useState(15);
const indexLastGame = currentPage * gamesPerPage;
const ixdexFirstGame = indexLastGame - gamesPerPage;
const currentGames = allGames.slice(ixdexFirstGame, indexLastGame);

const paged = (pageNumber) => {setCurrentPage(pageNumber)};

// Button Functions
function handleClick(e){
    e.preventDefault();
    dispatch(getVideogames());
};

return(
    <React.Fragment>
        <h1>Home</h1>
        <button onClick={e => handleClick(e)}>GET Videogames List</button>
        <br/>
        <Paginated gamesPage={gamesPerPage} games={allGames.length} pag={paged}/>
        {currentGames?.map(g => {return (
        <Game name={g.name} img={g.background_image} genres={g.genres.map(e => e.name).join(', ')}/>
        )})}
    </React.Fragment>
)};
