import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../Redux/actions";
import defaultImage from "../assets/gamer-1.png";
import loader from "../assets/loader-2.gif"
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

  const [loaded, setLoaded] = useState(false);


    
  return( 
  <React.Fragment>
    {id !== "NO ID" ?
      (
      <Link to={`/detail/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <div className={s.card} onClick={e => detailG(e)}>
          <div className={s.title}>
            <h4>{name}</h4>
          </div>
          
          <div className={s.container}>
          <img src={img} alt="Img Not Found" className={loaded ? (s.image) : (s.hidden)} onLoad={()=> setLoaded(true)}/>
          <img src={loader} alt="Img Not Found" className={loaded ? (s.hidden) : (s.imageLoader)}/>
            <div className={s.overlay}>
              <div className={s.genres}>
                <p>{genres}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
      ) : (
      <div className={s.card} onClick={e => detailG(e)}>
        <div className={s.title}>
          <h4>{name}</h4>
        </div>
        
        <div className={s.container}>
        <img src={img} alt="Img Not Found" className={loaded ? (s.image) : (s.hidden)} onLoad={()=> setLoaded(true)}/>
          <img src={loader} alt="Img Not Found" className={loaded ? (s.hidden) : (s.imageLoader)}/>
          <div className={s.overlay}>
            <div className={s.genres}>
              <p>{genres}</p>
            </div>
          </div>
        </div>
      </div>
      )
    }
  </React.Fragment>
  )
};
