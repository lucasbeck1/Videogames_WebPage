import './App.css';

import { Route } from 'react-router-dom';
import { landingPage } from './Components/landingPage';
import { Home } from './Components/home';

function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Route exact path='/' component={landingPage}/>
      <Route exact path='/list' component={Home}/>

    </div>
  );
}

export default App;
