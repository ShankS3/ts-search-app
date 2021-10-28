import React from 'react';
import { render } from '@testing-library/react';
import Pagination from 'components/Pagination';

describe('Pagination', () => {
    let getByTestId, container, getAllByTestId;
    beforeEach(() => {
        ({ getByTestId, container, getAllByTestId } = render(<Pagination />));
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
});
