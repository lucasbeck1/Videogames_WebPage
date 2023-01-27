import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../Redux/actions";
import defaultImage from "./assets/joy-1.jpg";
import s from "./Game2.module.css";


export function Game ({name, img, genres, id}){
    const dispatch = useDispatch();

    function detailG(e){
        dispatch(getDetail(id))
    };
    
    if(genres.split(', ').length > 3){
        genres = genres.split(', ').slice(0,3).join(', ');
    }

    
return(
    <React.Fragment>
    <Link to={`/detail/${id}`} className={s.det}>
    <div className={s.card} onClick={e => detailG(e)}>
        <div className={s.title}>
            <h4>{name}</h4>
        </div>
        
        <div className={s.container}>
        <img src={img? (img) : (defaultImage)} alt="Img Not Found" className={s.image}/>
          <div className={s.overlay}>
            <div lassName={s.genres}><p>{genres}</p></div>
          </div>
        </div>
        
    </div>
    </Link>
    </React.Fragment>
)};
