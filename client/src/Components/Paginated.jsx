import React from "react";
import s from "./Paginated.module.css"

export default function Paginated({gamesTotal, gamesPage, actualPage, select, nextSelect, prevSelect}){

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(gamesTotal/gamesPage); i++) {
      pageNumbers.push(i)
  };

  let firstNumbers = pageNumbers.slice(actualPage - 6, actualPage -1 );
  let lastNumbers = pageNumbers.slice(actualPage, actualPage + 5);
  
  
  
  
  
  let arrayNumber = [...firstNumbers, actualPage, ...lastNumbers];
  
  
  
  console.log(arrayNumber)


  

  return(
    <React.Fragment>
      <nav className={s.nav}>
        <button onClick={()=>prevSelect()} className={s.number}>{'<'}</button>
        {pageNumbers && pageNumbers.map( number => { return(
          <button onClick={()=>select(number)} key={number} className={number === actualPage? (s.numberSelected) : (s.number)}>{number}</button>
        )})}
        <button onClick={()=>nextSelect(pageNumbers[pageNumbers.length-1])} className={s.number}>{'>'}</button>
      </nav>
    </React.Fragment>
  )
};

/* Aux compute
if games = 100
game per page = 15

100/15 = 6.66 --> 7

pageNumber = [1,2,3,4,5,6,7]
*/

/* 
export default function Paginated({dogsTotal, dogsPage, select, nextSelect, prevSelect, actualPage}){

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(dogsTotal/dogsPage); i++) {
        pageNumbers.push(i)
    };
    
    
    return(
        <React.Fragment>
            <nav className={s.nav}>
                <button onClick={()=>prevSelect()} className={s.number}>{'<'}</button>
                {pageNumbers?.map( number => { return(
                    <button onClick={()=>select(number)} key={number} className={number === actualPage? (s.numberSelected) : (s.number)}>{number}</button>
                )})}
                <button onClick={()=>nextSelect(pageNumbers[pageNumbers.length-1])} className={s.number}>{'>'}</button>
            </nav>
        </React.Fragment>
    )
};

*/
