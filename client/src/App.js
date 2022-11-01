import './App.css';
// import React, {Component} from "react";
import { Route } from 'react-router-dom';
import { Landing } from './Components/Landing';
import { Home } from './Components/Home';
import { Detail } from './Components/Detail';
import { CreateForm } from './Components/CreateForm';

export default function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/create' component={CreateForm}/>
      <Route exact path='/detail/:id' component={Detail}/>
    </div>
  );
};