import axios from 'axios';
import Games from '../Back_data/Games';
import Genres from '../Back_data/Genres';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const ORDER_GAMES = 'ORDER_GAMES';
export const GET_GENRES = 'GET_GENRES';
export const FILTER_GAMES = 'FILTER_GAMES';
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME';
export const GET_DETAIL = 'GET_DETAIL';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME'; 


const gamesCopy = Games.slice();
const genresCopy = Genres.slice();

const mainURL = "http://localhost:3001";
let dbConnection = null;


axios(`${mainURL}/conn`)
.then(() => dbConnection = true)
.catch(() => dbConnection = false)




// Functions data from Local: Back_data.js (dbConnection = false)
function gamesLocal(dispatch){
  return(dispatch({
    type: GET_VIDEOGAMES,
    payload: gamesCopy
  }));
};

function gamesByNameLocal(dispatch, name){
  let gamesByName = gamesCopy.slice().filter(g => g.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())).slice(0,15);
  return(dispatch({
    type: GET_VIDEOGAMES_BY_NAME,
    payload: gamesByName
  }));
};

function genresLocal(dispatch){
  return(dispatch({
    type: GET_GENRES,
    payload: genresCopy
  }));
};

function detailLocal(dispatch, id){
  let gameInfo = gamesCopy.find(g => g.id.toString() === id.toString());
  return(dispatch({
    type: GET_DETAIL,
    payload: gameInfo
  }));
};

function newGameLocal(dispatch, payload){
  let date =  Date.now();
  let newID = Math.ceil(date / (Math.floor(Math.random()*1000)));
  let newGame = {
    id: newID,
    name: payload.name,
    description: payload.description,
    image: payload.image,
    released: payload.released,
    rating: payload.rating,
    genres: payload.genres.join(', '),
    platforms: payload.platforms,
    "createdInDatabase": true,
    owner: "User"
  }
  gamesCopy.unshift(newGame);
}



// Functions data from DB (dbConnection = true)
async function gamesDb(dispatch){
  let info = await (axios(`${mainURL}/videogames`));
  return(dispatch({
    type: GET_VIDEOGAMES,
    payload: info.data
  }));
};

async function gamesByNameDb(dispatch, name){
  let info = await (axios(`${mainURL}/videogames?name=${name}`));
  return(dispatch({
    type: GET_VIDEOGAMES_BY_NAME,
    payload: info.data
  }));
};

async function genresDb(dispatch){
  let info = await (axios(`${mainURL}/genres`));
  return(dispatch({
    type: GET_GENRES,
    payload: info.data
  }));
};

async function detailDB(dispatch, id, CIDB){
  let info = await (axios.get(`${mainURL}/videogames/${id}?CIDB=${CIDB}`));
  return(dispatch({
    type: GET_DETAIL,
    payload: info.data
  }));
};

async function newGameDB(dispatch, payload){
  const response = await axios.post(`${mainURL}/videogames`, payload);
  return (response);
};



// Dispatch Functions
export function getVideogames(){
  if(dbConnection) return async (dispatch) => gamesDb(dispatch);
  return async (dispatch) => gamesLocal(dispatch); 
};

export function getVideogamesByName(name){
  if(dbConnection) return async (dispatch) => gamesByNameDb(dispatch, name);
  return async (dispatch) => gamesByNameLocal(dispatch, name);
};

export function getGenres(){
  if(dbConnection) return async (dispatch) => genresDb(dispatch);
  return async (dispatch) => genresLocal(dispatch);
};

export function getDetail(id, CIDB){
  if(dbConnection) return async (dispatch) => detailDB(dispatch, id, CIDB);
  return async (dispatch) => detailLocal(dispatch, id, CIDB);
};

export function createGame(payload){
  if(dbConnection) return async (dispatch) => newGameDB(dispatch, payload);
  return async (dispatch) => newGameLocal(dispatch, payload);
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

export function clearDetail(){
  return({
    type: CLEAR_DETAIL,
  });
};








// AXIOS documentation

/* 
// Send a POST request
axios({
    method: 'post',
    url: '/user/12345',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });
  // GET request for remote image in node.js
  axios({
    method: 'get',
    url: 'http://bit.ly/2mTM3nY',
    responseType: 'stream'
  })
    .then(function (response) {
      response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    });
*/







