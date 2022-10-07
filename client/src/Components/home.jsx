import React, {Component, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames, orders, getGenres, filters, getVideogamesByName, getDetail } from "../Redux/actions";
import { Game } from "./Game";
import { Paginated } from "./Paginated";
import { CreateForm } from "./CreateForm";

export function Home (){

// Global states
const dispatch = useDispatch();
const allGames = useSelector(state => state.videogamesList);
const allgenres = useSelector(state => state.genres);


//const [state, dispatch] = useReducer(reducer, initialState);
useEffect(()=>{
    dispatch(getVideogames())
    dispatch(getGenres())
},[dispatch]);


// Local states (paginated)
const [currentPage, setCurrentPage] = useState(1);
const paged = (pageNumber) => {setCurrentPage(pageNumber)};
const [gamesPerPage, setGamesPerPage] = useState(15);
const indexLastGame = currentPage * gamesPerPage;
const ixdexFirstGame = indexLastGame - gamesPerPage;
const currentGames = allGames.slice(ixdexFirstGame, indexLastGame);

// Local states (Order)
const [orden, setOrden] = useState('Sin Ordenar');
const [name, setName] = useState('');


// Button Functions
function handleClick(e){
    e.preventDefault();
    dispatch(getVideogames());
    setCurrentPage(1);
};

function handleInput(e){
    e.preventDefault()
    setName(e.target.value)
};

function handleSubmit(e){
    e.preventDefault()
    dispatch(getVideogamesByName(name))
};

function orderG(e){
    e.preventDefault()
    dispatch(orders(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado de ${e.target.value}`)
};

function filterG(e){
    e.preventDefault()
    dispatch(filters(e.target.value))
    setCurrentPage(1)
    setOrden(`Filtrado de ${e.target.value}`)
};


return(
    <React.Fragment>
        <h1>Home</h1>
        <button onClick={e => handleClick(e)}>GET Videogames List</button>
        <br/>
        <Link to='/create'><button>Define New Videogame</button></Link>
        <br/>
        <input onChange={e => handleInput(e)} type='text' placeholder="Search..."/>
        <button onClick={e => handleSubmit(e)} type="submit">Buscar</button>
        <br/>
        <h4>Filters</h4>
        <span>Storage</span>
        <select>
            <option value='All'>All</option>
            <option value='Api'>Api</option>
            <option value='Db'>Library</option>
        </select>
        <span>Genre</span>
        <select onChange={(e) => filterG(e)} defaultValue={'DEFAULT'}>
            <option value='DEFAULT' disabled>Filter by genre</option>
            {allgenres?.map(element => {
               return(<option value={element}>{element}</option>) 
            })}
        </select>
        <h4>Order by</h4>
        <span>Name</span>
        <select onChange={(e) => orderG(e)} defaultValue={'DEFAULT'}>
            <option value='DEFAULT' disabled>Order by Name</option>
            <option value='A-Z'>A-Z</option>
            <option value='Z-A'>Z-A</option>
        </select>
        <span>Rating</span>
        <select onChange={(e) => orderG(e)} defaultValue={'DEFAULT'}>
            <option value='DEFAULT' disabled>Order by Rating</option>
            <option value='High Rating'>High Rating</option>
            <option value='Low Rating'>Low Rating</option>
        </select>
        <br/>
        <Paginated gamesPage={gamesPerPage} games={allGames.length} pag={paged}/>
        {currentGames?.map(g => {return (
        <Game name={g.name} img={g.image} genres={g.genres} CIDB={g.createdInDatabase} id={g.id}/>
        )})}
    </React.Fragment>
)};

