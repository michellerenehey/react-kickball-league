import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the kickball manager!/i);
  expect(linkElement).toBeInTheDocument();
});
