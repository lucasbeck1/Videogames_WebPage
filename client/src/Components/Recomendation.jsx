import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Game } from "./Game";
import s from "./styles/Recomendation.module.css";



export function Recomendation(){

  const allGames = useSelector(state => state.videogamesListCOMPLETE);
  const [picked, setPicked] = useState(false);
  const [game, setGame] = useState({});
  
  
  function random(e){
    e.preventDefault();
    const random = Math.floor(Math.random() * allGames.length);
    setGame(allGames.slice()[random]);
    setPicked(true);
  }

  return(
  <React.Fragment>
  <Link to='/home' style={{ color: 'inherit', textDecoration: 'inherit'}}>
    <p className={s.btn}>Home</p>
  </Link>
  <div className={s.modal1}>
    <p>You don't know what do you play ?</p>
    <p>See a random recommendation</p>
    <button className={s.btn} onClick={e => random(e)}>Pick One</button>
  </div>
  
  { picked && 
  <div className={s.modal2}>
    <Game game={game} key={game.id}/>
  </div>
  }
  </React.Fragment>
  )
};
