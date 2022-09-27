import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const ORDER_GAMES = 'ORDER_GAMES';
export const GET_GENRES = 'GET_GENRES';
export const FILTER_GAMES = 'FILTER_GAMES';
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME';
export const GET_DETAIL = 'GET_DETAIL' 



export function getVideogames(){
    return(async function (dispatch){
        let info = await (axios(`https://api.rawg.io/api/games?page_size=40&key=183c5c4cee1c4bccb3496db9db6198e0&page=1`));
       
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

export function getVideogamesByName(name){
    return(async function (dispatch){
        let info = await (axios(`https://api.rawg.io/api/games?search=${name}&key=183c5c4cee1c4bccb3496db9db6198e0`));
       
        //let info = await (axios('http://localhost:3001/videogames').data);
        //let info = await (fetch('http://localhost:3001/videogames').json());
        //let info = await (await fetch('http://localhost:3001/videogames')).json();
        //let info1 = await (await fetch('http://localhost:3001/videogames'));
        //let info2 = JSON.parse(info1)
        return(dispatch({
            type: GET_VIDEOGAMES_BY_NAME,
            payload: info.data.results
        }));
    });
};

export function getGenres(){
    return(async function (dispatch){
        let info = await (axios(`https://api.rawg.io/api/genres?key=183c5c4cee1c4bccb3496db9db6198e0`));
        const Genres = info.data.results.map(g => g.name);
        return(dispatch({
            type: GET_GENRES,
            payload: Genres
        }));
    });
};

export function orders(payload){
    return({
        type: ORDER_GAMES,
        payload
    });
};

export function filters(payload){
    return({
        type: FILTER_GAMES,
        payload
    });
};

export function getDetail(payload){
    return({
        type: GET_DETAIL,
        payload
    });
};