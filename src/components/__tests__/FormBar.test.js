import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormBar from 'components/FormBar';

describe('Form Bar', () => {
    let getByTestId, getByRole;
    let page = 1;
    let submitAction = jest.fn();

    beforeEach(() => {
        ({ getByTestId, getByRole } = render(<FormBar page={page} submitAction={submitAction} />));
    });

test('renders input field', () => {
    const searchInput = getByTestId('search-text');
    const searchButton = getByTestId('search-button');

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'text');
    expect(searchInput).toHaveValue('');
    expect(searchButton).toBeInTheDocument();
});

test('clicking the search button', () => {
    const searchInput = getByTestId('search-text');
    const searchButton = getByTestId('search-button');
    userEvent.type(searchInput, 'abc');
    userEvent.click(searchButton);
    expect(searchInput.value).toEqual('abc');
    expect(submitAction).toBeCalledWith({
        searchText: 'abc',
        sortBy: '',
        page
    })
});

test('renders select field', () => {
    const sortSelect = getByTestId('sort-select');

    expect(sortSelect).toBeInTheDocument();
    expect(sortSelect).toHaveValue('');
    userEvent.selectOptions(sortSelect, ['name,desc']);
    expect(sortSelect.value).toEqual('name,desc');
    expect(getByRole('option', {name: 'Name - Ascending'}).selected).toBe(false)
    expect(getByRole('option', {name: 'Name - Descending'}).selected).toBe(true)
    expect(getByRole('option', {name: 'Last updated - Ascending'}).selected).toBe(false)
    expect(getByRole('option', {name: 'Last updated - Descending'}).selected).toBe(false)
    expect(submitAction).toBeCalledWith({
        searchText: '',
        sortBy: 'name,desc',
        page
    })
});
});