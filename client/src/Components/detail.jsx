import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail } from "../Redux/actions";


export function Detail (){
    const detailG = useSelector(state => state.detail);
    const dispatch = useDispatch();

    useEffect(()=>{
        return () => {dispatch(clearDetail())}
    },[dispatch])

    /*
    let idG = (detailG.id)?.toString();
    useEffect(()=>{
        console.log('Ruta',props.match.params.id);
        console.log('Juego',idG);
    },[idG, props.match.params.id]);
    */

return(
    <React.Fragment>
        <Link to={`/home`}><p>Home</p></Link>
        {Object.keys(detailG).length > 0 ? 
        (<>
        <h2>{detailG.name}</h2>
        <p>Genres: {detailG.genres}</p>
        <p>Platforms: {detailG.platforms}</p>
        <p>Date of release: {detailG.released}</p>
        <p>Rating: {detailG.rating}</p>
        <img src={detailG.image} alt="Img Not Found" width='200px' height='200px'/>
        <p>{detailG.description}</p>
        </>) 
        : (<h3>Loading</h3>)}
    </React.Fragment>
)};