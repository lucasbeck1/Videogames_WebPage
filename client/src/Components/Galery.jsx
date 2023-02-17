import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Vectors_React from "./assets/vectors";
import s from "./Galery.module.css";



export function Galery (){

  const allGames = useSelector(state => state.videogamesListCOMPLETE);
  
  const images = {
    img1: allGames[0],
    img2: allGames[1],
    img3: allGames[2],
    img4: allGames[3],
    img5: allGames[4],
  }

  return(
  <React.Fragment>
  <section className={s.galery}>
    <img src={images.img1.image} alt="Img Not Found" className={s.image} title={images.img1.name}/>
    <img src={images.img2.image} alt="Img Not Found" className={s.image} title={images.img2.name}/>
    <img src={images.img3.image} alt="Img Not Found" className={s.image} title={images.img3.name}/>
    <img src={images.img4.image} alt="Img Not Found" className={s.image} title={images.img4.name}/>
    <img src={images.img5.image} alt="Img Not Found" className={s.image} title={images.img5.name}/>
  </section>
  </React.Fragment>
  )
};
