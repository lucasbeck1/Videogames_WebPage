import './App.css';

import { Route } from 'react-router-dom';
import { LandingPage } from './Components/LandingPage';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/home' component={Home}/>

    </div>
  );
}

export default App;
