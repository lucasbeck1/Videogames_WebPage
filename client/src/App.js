import './App.css';

import { Route } from 'react-router-dom';
import { Home } from './Components/home';
import { List } from './Components/list';

function App() {
  return (
    <div className="App">
      <h1>Henry Videogames</h1>
      <Route exact path='/' component={Home}/>
      <Route exact path='/videogames' component={List}/>

    </div>
  );
}

export default App;
