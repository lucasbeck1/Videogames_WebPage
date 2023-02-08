import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames, getGenres, getVideogamesByName } from "../Redux/actions";
import { Game } from "./Game";
import { Paginated } from "./Paginated";
import { Loading } from "./Loading";
import { FilterBar } from "./FilterBar";
import Vectors_React from "./assets/vectors";
import s from "./Home.module.css";

export function Home (){

// Global states
const dispatch = useDispatch();
const allGames1 = useSelector(state => state.videogamesListCOMPLETE);
const allGames = useSelector(state => state.videogamesList);
//const [state, dispatch] = useReducer(reducer, initialState);


useEffect(()=>{
    dispatch(getGenres())
    dispatch(getVideogames())
},[dispatch]);


// Local states (paginated)
const [currentPage, setCurrentPage] = useState(1);
const changePage = (pageNumber) => {setCurrentPage(pageNumber)};
const previousPage = () => {if(parseInt(currentPage) !== 1) setCurrentPage(parseInt(currentPage) -1)};
const nextPage = (last) => {if(parseInt(currentPage) !== (last)) setCurrentPage(parseInt(currentPage) + 1)};

const [gamesPerPage, setGamesPerPage] = useState(15);
const indexLastGame = currentPage * gamesPerPage;
const ixdexFirstGame = indexLastGame - gamesPerPage;
const currentGames = allGames.slice(ixdexFirstGame, indexLastGame);

// Local states (Search)
const [name, setName] = useState('');
const [open1, setOpen1] = useState(false);
const [open2, setOpen2] = useState(false);

// Button Functions
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



  return(
  <React.Fragment>
    <div className={s.header}>
      <div>
        <input id='SearchInput' onChange={e => handleInput(e)} type='text' placeholder="Search..."/>
        <button onClick={e => handleSubmit(e)} type="submit">{Vectors_React.search}</button>
      </div>
      <h2>Lucky Gamer Browser</h2>
      <div>
        <Link to='/'><button>To landing</button></Link>
        <Link to='/create'><button>Create</button></Link>
      </div>
    </div>
    
    <button onClick={(e) => {e.preventDefault(); setOpen1(true)}}>Recomendation 1</button>
    <dialog open={open1}>
      <p>ESTO ES UN DIALOGO</p>
      <p>ARRIBA LAS MANOS</p>
      <button onClick={(e) => {e.preventDefault(); setOpen1(false)}}>Cerrar</button>
    </dialog>
    
    <br/>
    <button onClick={(e) => {e.preventDefault(); setOpen2(true)}}>Recomendation 2</button>
      
    { open2 && (
      <div>
        <p>ESTO otro DIALOGO</p>
        <p>ARRIBA LAS MANOS</p>
        <button onClick={(e) => {e.preventDefault(); setOpen2(false)}}>Cerrar</button>
      </div>
    )}
    
    
    {allGames.length > 0 ? 
    (<div>
      <br></br>
      <Paginated 
      gamesTotal={allGames.length} 
      gamesPage={gamesPerPage} 
      actualPage={currentPage}
      select={changePage}
      prevSelect={previousPage}
      nextSelect={nextPage}
      />
      <div className={s.content}>
        <FilterBar setCurrentPage={setCurrentPage} setGamesPerPage={setGamesPerPage} />
        <div className={s.list}>
          {currentGames?.map(g => {return (
          <Game name={g.name} img={g.image} genres={g.genres} CIDB={g.createdInDatabase} id={g.id} key={g.id}/>
          )})}
        </div>
      </div>
    </div>)
    :
    (<>
    <Loading/>
    </>)}
    <p>Made by Lucas beckford | 2022 All rights reserved</p>
  </React.Fragment>
  )
};

