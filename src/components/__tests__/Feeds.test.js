import { render } from '@testing-library/react';
import Feeds from 'components/Feeds';

describe('Feeds', () => {
  let getByTestId, container;

  let feeds = {
    data: [
      {
        "name": "Customer Assurance Liaison",
        "image": "http://lorempixel.com/640/480",
        "description": "Vel voluptatem id repudiandae aut omnis. Deleniti tempore aliquam quia magnam eos. Sunt saepe nisi delectus.",
        "dateLastEdited": "2018-05-19T12:33:25.545Z"
      }
    ],
    page: 1,
    pageSize: 10,
    totalCount: 100,
    searchText: '',
    sortBy: '',
    loader: false,
    error: false,
    errorMessage: ''
  };

  let actions = {
    onFetchFeeds: jest.fn()
  }

  beforeEach(() => {
    ({ getByTestId, container } = render(<Feeds feeds={feeds} actions={actions} />));
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
