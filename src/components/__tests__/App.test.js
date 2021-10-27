import React from 'react';
import { render } from '@testing-library/react';
import App from 'components/App';

describe('App', () => {
  let getByTestId, container;
  beforeEach(() => {
    ({ getByTestId, container } = render(<App />));
  });

  test('renders App', () => {
    expect(container.childElementCount).toEqual(1);
    expect(getByTestId('App')).toBeInTheDocument();
  });

  test('renders Feed', () => {
    const heading = getByTestId('page-title');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/^Feed$/);
  });

  test('renders Form bar', () => {
    expect(getByTestId('search-text')).toBeInTheDocument();
  });

  test('renders card container', () => {
    expect(getByTestId('card-container')).toBeInTheDocument();
  });
});