import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormBar from 'components/FormBar';

describe('Form Bar', () => {
    let getByTestId, getByRole, rerender;
    let page = 1;
    let submitAction = jest.fn();

    beforeEach(() => {
        ({ getByTestId, getByRole, rerender } = render(<FormBar page={page} submitAction={submitAction} searchText="" sortBy="" />));
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
        expect(submitAction).toBeCalledWith({
            searchText: '',
            sortBy: 'name,desc',
            page
        });
        expect(sortSelect.value).toEqual('name,desc');
        expect(getByRole('option', {name: 'Name - Ascending'}).selected).toBe(false);
        expect(getByRole('option', {name: 'Name - Descending'}).selected).toBe(true);
        expect(getByRole('option', {name: 'Last updated - Ascending'}).selected).toBe(false);
        expect(getByRole('option', {name: 'Last updated - Descending'}).selected).toBe(false);
    });

    test('should render with store props', () => {
        const searchInput = getByTestId('search-text');
        const sortSelect = getByTestId('sort-select');
        let searchText = "lord of the rings";
        let sortBy = "name,desc";

        rerender(<FormBar page={page} searchText={searchText} sortBy={sortBy} submitAction={submitAction} />);
        
        expect(searchInput.value).toEqual(searchText);
        expect(sortSelect).toHaveValue(sortBy);
    })
});