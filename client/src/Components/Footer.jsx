import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Vectors_React from "../assets/vectors";
import s from "./styles/footer.module.css";



export function Footer (){
  return(
  <>
  <div className={s.banner}>
    <p>Made by Lucas Beckford</p>
   {/*  <p>Links</p>
    <p>Contact</p>
    <p>About</p> */}
    <p>2023</p>
  </div>
  </>)
};
