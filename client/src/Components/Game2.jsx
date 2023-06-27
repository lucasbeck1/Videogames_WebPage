import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../Redux/actions";
import defaultImage from "../assets/gamer-1.png";
import s from "./styles/Game2.module.css";


export function Game ({game}){
  const dispatch = useDispatch();

  function detailG(e){
    dispatch(getDetail(id, CIDB))
  };
  
  const id = game.id;
  const name = game.name;
  const img = game.image ? (game.image) : (defaultImage)
  const CIDB = game.createdInDatabase;
  let genres = game.genres;

  
  if(genres.split(', ').length > 3){
      genres = genres.split(', ').slice(0,3).join(', ');
  };


  const card =(
    <div className={s.card} onClick={e => detailG(e)}>
      <div className={s.title}>
        <h4>{name}</h4>
      </div>
      
      <div className={s.container}>
      <img src={img} alt={game.name} className={s.image} />
        <div className={s.overlay}>
          <div className={s.genres}>
            <p>{genres}</p>
          </div>
        </div>
      </div>
    </div>
  )
    
  return( 
  <React.Fragment>
    {id !== "NO ID" ?
      (
      <Link to={`/detail/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
       {card}
      </Link>
      ) : (
      card
      )
    }
  </React.Fragment>
  )
};
