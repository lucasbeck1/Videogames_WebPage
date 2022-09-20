import React, {Component} from "react";
import { Link } from "react-router-dom";

export class landingPage extends Component{

render(){
return(
    <React.Fragment>
        <h1>landingPage</h1>
        <Link exact to='/list'>PRESS START</Link>
    </React.Fragment>
)}    
};