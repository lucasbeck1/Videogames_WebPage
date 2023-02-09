import React, { useEffect, useState} from "react";
import s from "./Modal1.module.css";






export function Modal1({setOpen}){



  const [questions1, setquestions1] = useState(false);
  const [questions2, setquestions2] = useState(false);
  const [questions3, setquestions3] = useState(false);
  const [result, setResult] = useState(false);



  return(
  <React.Fragment>
  
  <div className={s.modal}>
    <button onClick={(e) => {e.preventDefault(); setOpen(false)}}>Cerrar</button>
    <p>You don't know what do you play ?</p>
    <p>See our personalized recommendations</p>
  </div>
  
  {!questions1 && (
  <button onClick={(e) => {e.preventDefault(); setquestions1(true)}}>Let's Go</button>
  )}
  
  
  {questions1 && (
  <div className={s.modal}>
    <p>You look something to play solo or with friends ?</p>
    <button onClick={(e) => {e.preventDefault(); setquestions2(true)}}>Solo</button>
    <button onClick={(e) => {e.preventDefault(); setquestions3(true)}}>Multiplayer</button>
  </div>
  )}
  
  
  {questions2 && (
  <div className={s.modal}>
    <p>You look something to play fast or a more narrative game ?</p>
    <button onClick={(e) => {e.preventDefault(); setResult(true)}}>Fast</button>
    <button onClick={(e) => {e.preventDefault(); setResult(true)}}>Narrative</button>
  </div>
  )}
  
  {questions3 && (
  <div className={s.modal}>
    <p>You look something family/casual or shooter ?</p>
    <button onClick={(e) => {e.preventDefault(); setResult(true)}}>Casual</button>
    <button onClick={(e) => {e.preventDefault(); setResult(true)}}>Shooter</button>
  </div>
  )}
  
  {result && (
  <div className={s.modal}>
    <p>GAME SELECTED</p>
  </div>
  )}
  
  
  
  </React.Fragment>
  )
};
