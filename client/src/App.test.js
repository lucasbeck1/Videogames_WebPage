import { render, screen } from '@testing-library/react';
import App from './App';
import { Loading } from './Components/Loading';
import { Provider } from "react-redux";
import store  from './Redux/store';
import { Home } from './Components/Home';
import { HashRouter as Router } from 'react-router-dom'
import { Recomendation } from './Components/Recomendation';
import { Detail } from './Components/Detail';
import { Game } from './Components/Game';
import { FilterBar } from './Components/FilterBar';
import { CreateForm } from './Components/CreateForm';

test('Render START button', () => {
  render(<App />);
  
  const homeButton = screen.getAllByText(/START/i);
  expect(homeButton).toHaveLength(2)
  
  // expect(homeButton).toBeInTheDocument()
  // ERROR
  // expect(received).toBeInTheDocument()
  // received value must be an HTMLElement or an SVGElement.
  // Received has type:  array
  // Received has value: [<button class="btnStart">START</button>, <p>Press start to continue</p>]
});


test('Render Loading text', () => {
  render(<Loading />);
  
  const loadText = screen.getByText(/Loading/i);
  expect(loadText).toBeInTheDocument(); 
});


test('Render Title header', () => {
  render(
  <Provider store={store}>
    <Router>
      <Home />
    </Router>
  </Provider>
  );
  
  const loadText = screen.getByText(/Lucky Gamer/i);
  expect(loadText).toBeInTheDocument();
});


test('Render Card Game', () => {
  render(
  <Provider store={store}>
    <Router>
      <Game game={{name:"gameName", img:"IMAGE", genres:"Action", CIDB:false, id:"000000"}} key={"000000"}/>
    </Router>
  </Provider>
  );
  
  const titleGame = screen.getByText(/gameName/i);
  expect(titleGame).toBeInTheDocument();
  
  const genres = screen.getByText(/Action/i);
  expect(genres).toBeInTheDocument();
  
  const image = screen.getByAltText(/Img Not Found/i);
  expect(image).toBeInTheDocument();
});


test('Render Recomendation texts', () => {
  render(
  <Provider store={store}>
    <Router>
      <Recomendation />
    </Router>
  </Provider>
  );
  
  const homeButton = screen.getByText(/Home/i);
  expect(homeButton).toBeInTheDocument();
  
  const pickButton = screen.getByText(/Pick/i);
  expect(pickButton).toBeInTheDocument();
});


test('Render Filter elements', () => {
  render(
  <Provider store={store}>
    <Router>
      <FilterBar />
    </Router>
  </Provider>
  );
  
  const filterText = screen.getAllByText(/Filters/i);
  expect(filterText).toHaveLength(2);
  
  const storageLabel = screen.getByLabelText(/Storage/i);
  expect(storageLabel).toBeInTheDocument();
  
  const genresLabel = screen.getByLabelText(/Genres/i);
  expect(genresLabel).toBeInTheDocument();
  
  const orderText = screen.getByText(/Order/i);
  expect(orderText).toBeInTheDocument();
  
  const nameLabel = screen.getByLabelText(/Name/i);
  expect(nameLabel).toBeInTheDocument();
  
  const ratingLabel = screen.getByLabelText(/Rating/i);
  expect(ratingLabel).toBeInTheDocument();
  
  const LowRating = screen.getByText(/Low Rating/i);
  expect(LowRating).toBeInTheDocument();
  
  const showText = screen.getByText(/Show/i);
  expect(showText).toBeInTheDocument();
  
  const showLabel = screen.getByText(/Show/i);
  expect(showLabel).toBeInTheDocument();
});


test('Render Form texts', () => {
  render(
  <Provider store={store}>
    <Router>
      <CreateForm />
    </Router>
  </Provider>
  );
  
  const homeButton = screen.getByText(/Home/i);
  expect(homeButton).toBeInTheDocument();
  
  const nameText = screen.getByText(/Name:/i);
  expect(nameText).toBeInTheDocument();
  
  const descriptionText = screen.getByText(/Description/i);
  expect(descriptionText).toBeInTheDocument();
  
  const genreDefault = screen.getByDisplayValue(/Select a genre/i);
  expect(genreDefault).toBeInTheDocument();
  
  const namePlaceHolder = screen.getByPlaceholderText(/Game Name/i);
  expect(namePlaceHolder).toBeInTheDocument();
});
