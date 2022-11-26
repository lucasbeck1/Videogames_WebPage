import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames, orders, getGenres, filters, getVideogamesByName } from "../Redux/actions";
import { Game } from "./Game";
import Paginated from "./Paginated";
import { Loading } from "./Loading";
import s from "./Home.module.css";

export function Home (){

// Global states
const dispatch = useDispatch();
const allGames1 = useSelector(state => state.videogamesListCOMPLETE);
const allGames = useSelector(state => state.videogamesList);
const allgenres = useSelector(state => state.genres);
//const [state, dispatch] = useReducer(reducer, initialState);


useEffect(()=>{
    dispatch(getGenres())
    dispatch(getVideogames())
},[dispatch]);


// Local states (paginated)
const [currentPage, setCurrentPage] = useState(1);
const paged = (pageNumber) => {setCurrentPage(pageNumber)};
const [gamesPerPage, setGamesPerPage] = useState(15);
const indexLastGame = currentPage * gamesPerPage;
const ixdexFirstGame = indexLastGame - gamesPerPage;
const currentGames = allGames.slice(ixdexFirstGame, indexLastGame);

// Local states (Order)
const [order, setOrder] = useState('NO Order');
const [name, setName] = useState('');


// Button Functions
function handleClean(e){
    e.preventDefault();
    dispatch(getVideogames());
    setCurrentPage(1);
};

function handleInput(e){
    e.preventDefault()
    setName(e.target.value)
};

async function handleSubmit(e){
    if(allGames1.some(g=>g.name.toLowerCase().includes(name.toLowerCase()))){
        e.preventDefault();
        await dispatch(getVideogamesByName(name));
        setCurrentPage(1);
        setName('');
        document.getElementById('SearchInput').value = '';
    }else{
        alert('Game not found');
    }
};

function orderG(e){
    e.preventDefault();
    dispatch(orders(e.target.value));
    setCurrentPage(1);
    setOrder(`Order ${e.target.value}`);
    // Esto se necesita porque al aplicar un sort, a diferecia de un filter, React no detecta cambios en nuestro estado y por eso no se actualizaría
    document.getElementById('name').selectedIndex = 'DEFAULT';
    document.getElementById('rating').selectedIndex = 'DEFAULT';
};

function filterG(e){
    e.preventDefault();
    dispatch(filters(e.target.value));
    setCurrentPage(1);
    document.getElementById('storage').selectedIndex = 'DEFAULT';
    document.getElementById('genre').selectedIndex = 'DEFAULT';
};


return(
    <React.Fragment>
        {allGames.length > 0 ? 
        (<>
        <div>
            <div className={s.header}>
                <div>
                    <input id='SearchInput' onChange={e => handleInput(e)} type='text' placeholder="Search..."/>
                    <button onClick={e => handleSubmit(e)} type="submit">Search</button>
                </div>
                <h2>Lucky Game Browser</h2>
                <div>
                    <Link to='/'><button>TO LANDING</button></Link>
                    <Link to='/create'><button>Create</button></Link>
                </div>
            </div>
            <br></br>
            <Paginated gamesPage={gamesPerPage} games={allGames.length} pag={paged}/>
            
            <div className={s.nav}>
                <button onClick={e => handleClean(e)}>Clean</button>
                <h4>Filters</h4>
                <label htmlFor='storage'>Storage</label>
                <select id='storage' onChange={(e) => filterG(e)} defaultValue={'DEFAULT'}>
                    <option value='DEFAULT' disabled>Storage</option>
                    <option value='All'>All</option>
                    <option value='Api'>Api</option>
                    <option value='Db'>Library</option>
                </select>
                <label htmlFor='genre'>Genre</label>
                <select id='genre' onChange={(e) => filterG(e)} defaultValue={'DEFAULT'}>
                    <option value='DEFAULT' disabled>Genre</option>
                    <option value='All'>All</option>
                    {allgenres?.map(element => {
                    return(<option value={element} key={element}>{element}</option>) 
                    })}
                </select>
                <h4>Order by</h4>
                <label htmlFor='name'>Name</label>
                <select id='name' onChange={(e) => orderG(e)} defaultValue={'DEFAULT'}>
                    <option value='DEFAULT' disabled>Alphabetical</option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                </select>
                <label htmlFor='rating'>Rating</label>
                <select id='rating' onChange={(e) => orderG(e)} defaultValue={'DEFAULT'}>
                    <option value='DEFAULT' disabled>Rating</option>
                    <option value='High Rating'>High Rating</option>
                    <option value='Low Rating'>Low Rating</option>
                </select>
                {/*
                <select onChange={(e) => orderG(e)} defaultValue={'DEFAULT'}>
                <option value='DEFAULT' disabled>Select a order</option>
                <optgroup label="Order by Name">
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                </optgroup>
                <optgroup label="Order by Rating">
                <option value='High Rating'>High Rating</option>
                <option value='Low Rating'>Low Rating</option>
                </optgroup>
                </select>
                */}
            </div>

            <div className={s.list}>
                {currentGames?.map(g => {return (
                    <Game name={g.name} img={g.image} genres={g.genres} CIDB={g.createdInDatabase} id={g.id} key={g.id}/>
                    )})}
            </div>
        
        </div>
        </>)
        :
        (<>
        <Loading/>
        </>)}
    </React.Fragment>
)};

