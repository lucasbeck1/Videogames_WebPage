import {GET_VIDEOGAMES} from './actions';

let initialState = {
    videogamesList: [],
    videogameDetail: ''
};

export default function rootReducer(state=initialState, action){
    switch(action.type){
        case GET_VIDEOGAMES: return({...state, videogamesList: action.payload});
        default: return(state)
    };
};