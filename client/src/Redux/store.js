import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;




// -- Otra forma de hacer el compose --
// - Para el composeWithDevTools
// - Hay que hacer una instalacion más e importalo pero nos ahorra escritura
/* 
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
*/