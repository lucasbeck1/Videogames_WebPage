import axios from 'axios';

export const GET_VIDEOGAMES = 'GET_VIDEOGAMES';
export const ORDER_GAMES = 'ORDER_GAMES';
export const GET_GENRES = 'GET_GENRES';
export const FILTER_GAMES = 'FILTER_GAMES';
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME';
export const GET_DETAIL = 'GET_DETAIL';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME'; 




export function getVideogames(){
    return(async function (dispatch){
        let info = await (axios(`http://localhost:3001/videogames`));
       
        //let info = await (axios('http://localhost:3001/videogames').data);
        //let info = await (fetch('http://localhost:3001/videogames').json());
        //let info = await (await fetch('http://localhost:3001/videogames')).json();
        return(dispatch({
            type: GET_VIDEOGAMES,
            payload: info.data
        }));
    });
};

export function getVideogamesByName(name){
    return(async function (dispatch){
        let info = await (axios(`http://localhost:3001/videogames?name=${name}`));
       
        return(dispatch({
            type: GET_VIDEOGAMES_BY_NAME,
            payload: info.data
        }));
    });
};

export function getGenres(){
    return(async function (dispatch){
        let info = await (axios(`http://localhost:3001/genres`));
        return(dispatch({
            type: GET_GENRES,
            payload: info.data
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

export function getDetail(id){
    return(async function (dispatch) {
        let info = await (axios(`http://localhost:3001/videogames/${id}`));
        return(dispatch({
            type: GET_DETAIL,
            payload: info.data
        }));
    });
};

export function clearDetail(){
    return({
        type: CLEAR_DETAIL,
    });
};

export function createGame(payload){
    return( async function(){
       const response = await axios.post('http://localhost:3001/videogames', payload);
       console.log(response);
       return (response);
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


/* 

Request method aliases
For convenience aliases have been provided for all supported request methods.

axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])
NOTE
When using the alias methods url, method, and data properties don't need to be specified in config.

 */





