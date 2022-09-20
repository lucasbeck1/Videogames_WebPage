import React, {Component} from "react";
import { Link } from "react-router-dom";

export class Home extends Component{

render(){
return(
    <React.Fragment>
        <h1>HOME</h1>
        <Link exact to='/videogames'>PRESS START</Link>
    </React.Fragment>
)}    
};