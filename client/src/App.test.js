import { render, screen } from '@testing-library/react';
import App from './App';

test('Render START button', () => {
  render(<App />);
  const linkElement = screen.getByText(/START/i);
  expect(linkElement).toBeInTheDocument();
});
