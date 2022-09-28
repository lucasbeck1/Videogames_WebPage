import './App.css';
// import React, {Component} from "react";
import { Route } from 'react-router-dom';
import { LandingPage } from './Components/LandingPage';
import { Home } from './Components/Home';
import { Detail } from './Components/Detail';
import { CreateForm } from './Components/CreateForm';

export default function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/detail/:id' component={Detail}/>
      <Route exact path='/detail/:id' component={CreateForm}/>
    </div>
  );
};