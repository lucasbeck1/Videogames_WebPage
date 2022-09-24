import {GET_VIDEOGAMES, ORDER_GAMES, GET_GENRES, FILTER_GAMES} from './actions';

let initialState = {
    videogamesList: [],
    videogamesListCOMPLETE: [],
    genres: [],
    detail: {}
};

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_VIDEOGAMES: return({...state, videogamesList: action.payload, videogamesList2:action.payload});

        case ORDER_GAMES: 
          let games = state.videogamesList;
          const filter = action.payload;
            
          if(filter === 'A-Z'){
            games = games.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return 1;
                }
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return -1;
                }
                // a must be equal to b
                return 0;
            });
          }
          else if(filter === 'Z-A'){
              games = games.sort(function (a, b) {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return 1;
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return -1;
                }
                // a must be equal to b
                return 0;
            });
          }
          else if(filter === 'High Rating'){
              games = games.sort(function (a, b) {
                  if (a.rating < b.rating) {
                    return 1;
                  }
                  if (a.rating > b.rating) {
                    return -1;
                  }
                  // a must be equal to b
                  return 0;
            });
          }
          else if(filter === 'Low Rating'){
              games = games.sort(function (a, b) {
                  if (a.rating > b.rating) {
                    return 1;
                  }
                  if (a.rating < b.rating) {
                    return -1;
                  }
                  // a must be equal to b
                  return 0;
            });
          }
          return({...state, videogamesList: games});

        case GET_GENRES: return({...state, genres: action.payload});

        case FILTER_GAMES:
          const allVideogames = state.videogamesListCOMPLETE;
          const filter1 = action.payload;
          let filtered = allVideogames;
          let genres = state.genres;
          if(filter1 === 'Api'){filtered = allVideogames.filter(g => g.createdInDatabase === false)}
          else if(filter1 === 'Db'){filtered = allVideogames.filter(g => g.createdInDatabase === true)}
          else if(genres.find(filter1)){filtered = allVideogames.filter(g => g.genres.includes(filter1))}


          return({
            ...state,
            videogamesList: filtered
          })


          

        default: return(state)
    };
};