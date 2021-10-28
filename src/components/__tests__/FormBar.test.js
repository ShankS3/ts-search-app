import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormBar from 'components/FormBar';

describe('Form Bar', () => {
    let getByTestId, getByRole;
    beforeEach(() => {
        ({ getByTestId, getByRole } = render(<FormBar />));
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
});

test('renders select field', () => {
    const sortSelect = getByTestId('sort-select');

    expect(sortSelect).toBeInTheDocument();
    expect(sortSelect).toHaveValue('sort1');
    userEvent.selectOptions(sortSelect, ['sort2']);
    expect(sortSelect.value).toEqual('sort2');
    expect(getByRole('option', {name: 'sort1'}).selected).toBe(false)
    expect(getByRole('option', {name: 'sort2'}).selected).toBe(true)
    expect(getByRole('option', {name: 'sort3'}).selected).toBe(false)
});
});