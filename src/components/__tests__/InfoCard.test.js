import React from 'react';
import { render } from '@testing-library/react';
import InfoCard from 'components/InfoCard';

describe('Info Card', () => {
    let getByTestId;
    beforeEach(() => {
        ({ getByTestId } = render(<InfoCard />));
    });

    test('card should render', () => {
        const card = getByTestId('card');
        expect(card).toBeInTheDocument();
    })

    test('card should contain elements', () => {
        const card = getByTestId('card');
        const cardImg = getByTestId('card-img');
        const cardTitle = getByTestId('card-title');
        const cardBody = getByTestId('card-body');
        expect(card).toContainElement(cardImg);
        expect(card).toContainElement(cardTitle);
        expect(card).toContainElement(cardBody);
    });
});
