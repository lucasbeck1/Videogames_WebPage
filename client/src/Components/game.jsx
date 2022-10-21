import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../Redux/actions";
import s from "./Game.module.css";


export function Game ({name, img, genres, id}){
    const dispatch = useDispatch();

    function detailG(e){
        dispatch(getDetail(id))
    };
    
    if(genres.split(', ').length > 4){
        genres = genres.split(', ').slice(0,4).join(', ');
    };

return(
    <React.Fragment>
    <Link to={`/detail/${id}`} className={s.algo}>
    <div className={s.card} onClick={e => detailG(e)}>
        <div className={s.title}>
            <h4>{name}</h4>
        </div>
        <div>
            <p className={s.genres}>{genres}</p>
            <img src={img} alt="Img Not Found"/>
        </div>
    </div>
    </Link>
    </React.Fragment>
)};
