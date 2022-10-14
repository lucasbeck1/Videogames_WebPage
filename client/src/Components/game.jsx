import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getDetail } from "../Redux/actions";


export function Game ({name, img, genres, CIDB, id}){

    const dispatch = useDispatch();

    function detailG(e){
        dispatch(getDetail(id))
    };
    
    if(CIDB === true){
        genres = genres.map(g=>g.name).join(', ');
    };

return(
    <React.Fragment>
        <br/>
        <h4>{name}</h4>
        <p>{genres}</p>
        <img src={img} alt="Img Not Found" width='170px' height='100px'/>
        <Link to={`/detail/${id}`}>
            <button onClick={e => detailG(e)}>Detail</button>
        </Link>
        <br/>
    </React.Fragment>
)};
