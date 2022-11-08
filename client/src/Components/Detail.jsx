import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail } from "../Redux/actions";
import { getDetail } from "../Redux/actions";
import { Loading } from "./Loading";
import defaultImage from "./assets/joy-1.jpg";
import s from "./Detail.module.css";



export function Detail (props){
    const detailG = useSelector(state => state.detail);
    const dispatch = useDispatch();

    /* 
    useEffect(()=>{
        dispatch(getDetail(props.match.params.id));
        return () => {dispatch(clearDetail())}
    },[dispatch, props.match.params.id])
   */


    
    // Otra forma de mostrar el loading
    let idG = (detailG.id)?.toString();
    useEffect(()=>{
        console.log('Ruta',props.match.params.id);
        console.log('Juego',idG);
    },[idG, props.match.params.id]);
    // Luego agregar el condicional:
    // {idG === props.match.params.id ?
    

    
    //Styles
    const styleDiv = {
        // backgroundColor: "rgba(255, 228, 196, 0.664)",
    /*     backgroundImage: 'url(' + detailG.image + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', */
    };
    



return(
    <React.Fragment>
        {/* {Object.keys(detailG).length > 0 ? */}
        {idG === props.match.params.id ?
        (<div style={styleDiv}>
        <Link to={`/home`} className={s.link}><p className={s.homeButton}>Home</p></Link>

        <div className={s.page}>
            <div className={s.upText}>
                <h2>{detailG.name}</h2>
                <span>{detailG.rating}</span>
            </div>
            <img src={detailG.image? (detailG.image) : (defaultImage)} alt="Img Not Found" className={s.image}/>
            <div className={s.downText}>
                <p>{detailG.genres}</p>
                <p>{detailG.released}</p>
            </div>
            <p className={s.description}>{detailG.description}</p>
            <p className={s.description}>Available on {detailG.platforms}</p>
        </div>

        </div>) 

        : ( <div style={styleDiv}>
        <Link to={`/home`} className={s.link}><p className={s.homeButton}>Home</p></Link>
        <Loading/>
        </div>)}
    </React.Fragment>
)};