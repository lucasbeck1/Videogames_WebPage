import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES'
export const ORDER_GAMES = 'ORDER_GAMES'

export function getVideogames(){
    return(async function (dispatch){
        let info = await (axios(`https://api.rawg.io/api/games?key=183c5c4cee1c4bccb3496db9db6198e0&page=1`));
       
        //let info = await (axios('http://localhost:3001/videogames').data);
        //let info = await (fetch('http://localhost:3001/videogames').json());
        //let info = await (await fetch('http://localhost:3001/videogames')).json();
        //let info1 = await (await fetch('http://localhost:3001/videogames'));
        //let info2 = JSON.parse(info1)
        return(dispatch({
            type: GET_VIDEOGAMES,
            payload: info.data.results
        }));
    });
};

export function orderName(payload){
    return({
        type: ORDER_GAMES,
        payload
    });
};