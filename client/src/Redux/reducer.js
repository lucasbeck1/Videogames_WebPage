import { GET_VIDEOGAMES, ORDER_GAMES, GET_GENRES, FILTER_GAMES, GET_VIDEOGAMES_BY_NAME, GET_DETAIL, CLEAR_DETAIL } from './actions';

let initialState = {
  videogamesListCOMPLETE: [],
  videogamesList: [],
  genres: [],
  detail: {}
};

export default function rootReducer(state=initialState, action){
  switch(action.type){
    case GET_VIDEOGAMES: return({...state, videogamesList: action.payload, videogamesListCOMPLETE: action.payload});


    case GET_VIDEOGAMES_BY_NAME: return({...state, videogamesList: action.payload});


    case ORDER_GAMES: 
      let games = state.videogamesList.slice();
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
          return 0;
        });
      }
      return({...state, videogamesList: games});


    case GET_GENRES: 
      const genresDB = action.payload.map(g => g.name).sort()
      return({...state, genres: genresDB});


    case FILTER_GAMES:
      const allVideogames = state.videogamesListCOMPLETE;
      const filter1 = action.payload;
      let filtered = allVideogames;
      let genres = state.genres;
      if(filter1 === 'Api'){filtered = allVideogames.filter(g => g.owner === "Admin")}
      else if(filter1 === 'Db'){filtered = allVideogames.filter(g => g.owner !== "Admin")}
      else if(genres.includes(filter1)){filtered = allVideogames.filter(g => g.genres.includes(filter1))}

      return({
        ...state,
        videogamesList: filtered
      });


    case GET_DETAIL:
      return({
        ...state,
        detail: action.payload
      })
          
      
    case CLEAR_DETAIL:
      return({
        ...state,
        detail: {}
      })

      
    default: return(state)
  };
};
