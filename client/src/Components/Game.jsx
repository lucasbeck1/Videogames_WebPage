import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../Redux/actions";
import defaultImage from "../assets/joy-1.png";
import s from "./styles/Game.module.css";


export function Game ({name, img, genres, CIDB, id}){
  const dispatch = useDispatch();

  function detailG(e){
    dispatch(getDetail(id, CIDB))
  };
  
  if(genres.split(', ').length > 3){
      genres = genres.split(', ').slice(0,3).join(', ');
  };

    
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
          <img src={img? (img) : (defaultImage)} alt="Img Not Found" className={s.image}/>
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
          <img src={img? (img) : (defaultImage)} alt="Img Not Found" className={s.image}/>
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
