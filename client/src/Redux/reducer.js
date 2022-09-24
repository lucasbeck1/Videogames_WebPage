import {GET_VIDEOGAMES, ORDER_GAMES} from './actions';

let initialState = {
    videogamesList: [],
    genres: [],
    detail: {}
};

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_VIDEOGAMES: return({...state, videogamesList: action.payload});

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

        default: return(state)
    };
};