import React from "react";
import s from "./Paginated.module.css";

export function Paginated({gamesTotal, gamesPage, actualPage, select, nextSelect, prevSelect}){

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(gamesTotal/gamesPage); i++) {
    pageNumbers.push(i)
  };


  let firstNumbers = pageNumbers.slice(actualPage - 6, actualPage - 1); // [-5,-4,-3,-2,-1]
  let lastNumbers = pageNumbers.slice(actualPage, actualPage + 4); // [+1,+2,+3,+4]
  
  if (actualPage < 6){
    firstNumbers = pageNumbers.slice(0, actualPage - 1);
    const long = 9 - firstNumbers.length;
    lastNumbers = pageNumbers.slice(actualPage, actualPage + long);
  }
  else if(lastNumbers.length < 5 && pageNumbers.length < 10){
    const long = lastNumbers.length - pageNumbers.length;
    firstNumbers = pageNumbers.slice(actualPage + long, actualPage - 1);
  }
  else if (lastNumbers.length < 5 && pageNumbers.length >= 10){
    const long = lastNumbers.length - 10;
    firstNumbers = pageNumbers.slice(actualPage + long, actualPage - 1);
  };
  
  
  let pagesNumbers = [...firstNumbers, actualPage, ...lastNumbers];


  
  return(
  <React.Fragment>
    <nav className={s.nav}>
      <button onClick={()=>prevSelect()} className={s.number}>{'<'}</button>
      {pagesNumbers && pagesNumbers.map( number => { return(
        <button onClick={()=>select(number)} key={number} className={number === actualPage? (s.numberSelected) : (s.number)}>{number}</button>
      )})}
      <button onClick={()=>nextSelect(pageNumbers[pageNumbers.length-1])} className={s.number}>{'>'}</button>
    </nav>
  </React.Fragment>
  )
};
