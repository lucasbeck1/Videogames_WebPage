import React, {Component} from "react";
import { Link } from "react-router-dom";


export class Game extends Component{

render(){
return(
    <React.Fragment>
        <h1>GAME</h1>
        <h5>{this.props.img}</h5>
        <h5>{this.props.name}</h5>
        <h5>{this.props.genres}</h5>
        <Link exact to={'/detail'}>Detail</Link>
    </React.Fragment>
)};
};