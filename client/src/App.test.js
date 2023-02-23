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
  const homeButton = screen.getByText(/START/i);
  expect(homeButton).toBeInTheDocument();
});


test('Render Loading text', () => {
  render(<Loading />);
  const loadText = screen.getByText(/Loading/i);
  expect(loadText).toBeInTheDocument();
});


test('Render title header', () => {
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
      <Game name={"gameName"} img={"IMAGE"} genres={"Action"} CIDB={false} id={"000000"} key={"000000"}/>
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


test('Render recomendation texts', () => {
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
  const filterText = screen.getByText(/Filters/i);
  expect(filterText).toBeInTheDocument();
  
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
  
  // const descId = screen.getByTestId(/desc/i);
  // expect(descId).toBeInTheDocument();
  
  
});
