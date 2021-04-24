import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // use StaticRouter for SSR
import { App } from './App';

test('renders learn react link', () => {
  render(<Router><App /></Router>);
  const linkElement = screen.getByText(/My HR App/i);
  expect(linkElement).toBeInTheDocument();
});
