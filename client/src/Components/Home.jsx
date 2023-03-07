import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getVideogames, getGenres, getVideogamesByName } from "../Redux/actions";
import { Game } from "./Game";
import { Pagination } from "./Pagination";
import { Loading } from "./Loading";
import { FilterBar } from "./FilterBar";
import { Galery } from "./Galery";
import Vectors_React from "../assets/vectors";
import s from "./styles/Home.module.css";



export function Home (){
  
  // Global states
  const dispatch = useDispatch();
  const allGames = useSelector(state => state.videogamesListCOMPLETE);
  const actualGames = useSelector(state => state.videogamesList);
  //const [state, dispatch] = useReducer(reducer, initialState);
  
  
  useEffect(()=>{
    dispatch(getGenres())
    dispatch(getVideogames())
  },[dispatch]);
  
  
  // Local states (pagination)
  const [currentPage, setCurrentPage] = useState(1);
  const changePage = (pageNumber) => {setCurrentPage(pageNumber)};
  const previousPage = () => {if(parseInt(currentPage) !== 1) setCurrentPage(parseInt(currentPage) -1)};
  const nextPage = (last) => {if(parseInt(currentPage) !== (last)) setCurrentPage(parseInt(currentPage) + 1)};
  
  const [gamesPerPage, setGamesPerPage] = useState(15);
  
  
  // if(window.screen.availWidth <= 520){
  //   setGamesPerPage(5);
  // }
  
  // else if(window.innerWidth <= 720){
  //   setGamesPerPage(10);
  // }
  
  const indexLastGame = currentPage * gamesPerPage;
  const ixdexFirstGame = indexLastGame - gamesPerPage;
  const currentGames = actualGames.slice(ixdexFirstGame, indexLastGame);
  
  // Local states (Search)
  const [name, setName] = useState('');
  
  // Button Functions
  function handleInput(e){
    e.preventDefault()
    setName(e.target.value)
  };
  
  async function handleSubmit(e){
    if(allGames.some(g=>g.name.toLowerCase().includes(name.toLowerCase()))){
      e.preventDefault();
      await dispatch(getVideogamesByName(name));
      setCurrentPage(1);
      setName('');
    }else{
      alert('Game not found');
    }
    document.getElementById('SearchInput').value = '';
  };
 
 


  return(
  <React.Fragment>
    <div className={s.header}>
      <form>
        <input id='SearchInput' onChange={e => handleInput(e)} type='text' placeholder="Search..."/>
        <button onClick={e => handleSubmit(e)} type="submit">{Vectors_React.search}</button>
      </form>
      <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <h2>Lucky Gamer Browser</h2>
      </Link>
      <div>
        <Link to='/recomendation' style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <button>Recomendation</button>
        </Link>
        <Link to='/create' style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <button>Create</button>
        </Link>
      </div>
    </div>
    
    
    
    
    {allGames.length > 0 ? (
      currentGames.length > 0 ? (
      <div>
        <br></br>
        <Pagination 
        gamesTotal={actualGames.length} 
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
            <Game game={g} key={g.id}/>
            )})}
          </div>
        </div>
        
        <div className={s.galery}>
          <Galery/>
          <h4>Recent & Most wanted</h4>
        </div>
      </div>
      
      
      ) : (
      <>
        <p>No games found. Keep searching</p>
      </>
      )
    ) : (
    <>
      <Loading/>
    </>
    )}
    
    
    
    
    <p>2023 licenced proyect</p>
  </React.Fragment>
  )
};
