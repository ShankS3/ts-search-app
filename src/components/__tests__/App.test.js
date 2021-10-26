import React from 'react';
import { render } from '@testing-library/react';
import App from 'components/App';

test('renders Feed', () => {
  render(<App />);
  expect(document.querySelector('h3')).toBeInTheDocument();
  expect(document.querySelector('h3')).toHaveTextContent(/^Feed$/);
});
