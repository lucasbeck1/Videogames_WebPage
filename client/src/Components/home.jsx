import React, {Component, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames, orderName } from "../Redux/actions";
import { Game } from "./Game";
import { Paginated } from "./Paginated";

export function Home (){

// Global states
const allGames = useSelector(state => state.videogamesList);
const dispatch = useDispatch();
//const [state, dispatch] = useReducer(reducer, initialState);
//useEffect(()=>{dispatch(getVideogames())},[dispatch]);

// Local states (paginated)
const [currentPage, setCurrentPage] = useState(1);
const [gamesPerPage, setGamesPerPage] = useState(15);
const indexLastGame = currentPage * gamesPerPage;
const ixdexFirstGame = indexLastGame - gamesPerPage;
const currentGames = allGames.slice(ixdexFirstGame, indexLastGame);

const paged = (pageNumber) => {setCurrentPage(pageNumber)};

const [orden, setOrden] = useState('Sin Ordenar')

// Button Functions
function handleClick(e){
    e.preventDefault();
    dispatch(getVideogames());
};

function orderN(e){
e.preventDefault()
dispatch(orderName(e.target.value))
setCurrentPage(1)
setOrden(`Ordenado de ${e.target.value}`)
}

return(
    <React.Fragment>
        <h1>Home</h1>
        <button onClick={e => handleClick(e)}>GET Videogames List</button>
        <br/>
        <h4>Filters</h4>
        <span>Storage</span>
        <select>
            <option value='All'>All</option>
            <option value='Api'>Api</option>
            <option value='Db'>Library</option>
        </select>
        <span>Genre</span>
        <select>
            <option>Filter by genre</option>
        </select>
        <h4>Order by</h4>
        <span>Name</span>
        <select onChange={(e) => orderN(e)} defaultValue={'DEFAULT'}>
            <option value='DEFAULT' disabled>Filter By Name</option>
            <option value='A-Z'>A-Z</option>
            <option value='Z-A'>Z-A</option>
        </select>
        <span>Rating</span>
        <select onChange={(e) => orderN(e)} defaultValue={'DEFAULT'}>
            <option value='DEFAULT' disabled>Filter By Rating</option>
            <option value='High Rating'>High Rating</option>
            <option value='Low Rating'>Low Rating</option>
        </select>
        <br/>
        <Paginated gamesPage={gamesPerPage} games={allGames.length} pag={paged}/>
        {currentGames?.map(g => {return (
        <Game name={g.name} img={g.background_image} genres={g.genres.map(e => e.name).join(', ')}/>
        )})}
    </React.Fragment>
)};

// Minuto 40