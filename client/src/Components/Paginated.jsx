import React from "react";
import s from "./Paginated.module.css"

export function Paginated({games, gamesPage, pag}){

    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(games/gamesPage); i++) {
        pageNumber.push(i)
    };

return(
    <React.Fragment>
        <nav>
            {pageNumber && pageNumber.map( number => { return(
                <button className={s.button} onClick={()=>pag(number)} key={number}>{number}</button>
            )}  )}
        </nav>
    </React.Fragment>
)};

/* 

if games = 100
game per page = 15

100/15 = 6.66 --> 7

pageNumber = [1,2,3,4,5,6,7]

*/