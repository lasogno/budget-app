import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders adding new account button', () => {
  render(<App />);
  const linkElement = screen.getByText(/add new account/i);
  expect(linkElement).toBeInTheDocument();
});
