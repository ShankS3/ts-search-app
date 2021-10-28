import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from 'components/Pagination';

describe('Pagination', () => {
    let getByTestId, container, getAllByTestId, rerender, getByText;
    const props = {
        page: 1,
        pageSize: 1,
        handlePagination: jest.fn()
    }
    beforeEach(() => {
        ({ getByTestId, container, getAllByTestId, rerender, getByText } = render(<Pagination {...props} />));
    })

    test('renders pagination component', () => {
        expect(container.childElementCount).toEqual(1);

        const paginationWrapper = getByTestId('pagination-wrapper');
        const nextButton = getByTestId('next-button');
        const previousButton = getByTestId('previous-button');
        const pageButton = getAllByTestId('page-button');

        expect(paginationWrapper.children.length).toEqual(3);
        expect(paginationWrapper).toContainElement(nextButton);
        expect(paginationWrapper).toContainElement(previousButton);
        expect(paginationWrapper).toContainElement(...pageButton);
        expect(pageButton).toHaveLength(1);
    });

    test('pagination should disable buttons on pageSize: 1', () => {
        const nextButton = getByTestId('next-button');
        const previousButton = getByTestId('previous-button');

        expect(nextButton).toHaveProperty('disabled', true);
        expect(previousButton).toHaveProperty('disabled', true);
        expect(getByText('1')).toHaveProperty('disabled', true);

    });

    test('pagination should increment page', () => {
        let incrementProps = Object.assign({}, props, {
            pageSize: 10,
        });
        rerender(<Pagination {...incrementProps} />);
        const nextButton = getByTestId('next-button');
        const previousButton = getByTestId('previous-button');

        userEvent.click(nextButton);
        expect(incrementProps.handlePagination).toBeCalledWith(2);
        expect(getByText('1')).toHaveProperty('disabled', true);
        expect(previousButton).toHaveProperty('disabled', true);
    });

    test('pagination should decrement page', () => {
        let decrementProps = Object.assign({}, props, {
            page: 10,
            pageSize: 10,
        });
        rerender(<Pagination {...decrementProps} />);
        const nextButton = getByTestId('next-button');
        const previousButton = getByTestId('previous-button');

        userEvent.click(previousButton);
        expect(decrementProps.handlePagination).toBeCalledWith(9);
        expect(getByText('10')).toHaveProperty('disabled', true);
        expect(nextButton).toHaveProperty('disabled', true);
    });
});
