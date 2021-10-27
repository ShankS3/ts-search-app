import React from 'react';
import { render } from '@testing-library/react';
import InfoCard from 'components/InfoCard';

describe('Info Card', () => {
    let getByTestId, rerender, container;
    const cardProps = {
        image: 'http://www.imgurl.com',
        name: 'card name',
        description: 'some description'
    };

    beforeEach(() => {
        ({ getByTestId, rerender, container } = render(<InfoCard data={{}} />));
    });

    test('card should not render on empty prop', () => {
        expect(container.childElementCount).toEqual(0);
    });

    test('card should render', () => {
        rerender(<InfoCard data={cardProps} />);
        const card = getByTestId('card');
        expect(card).toBeInTheDocument();
        expect(container.childElementCount).toEqual(1);
    })

    test('card should contain elements', () => {
        rerender(<InfoCard data={cardProps} />);
        const card = getByTestId('card');
        const cardImg = getByTestId('card-img');
        const cardTitle = getByTestId('card-title');
        const cardBody = getByTestId('card-body');
        expect(card).toContainElement(cardImg);
        expect(card).toContainElement(cardTitle);
        expect(card).toContainElement(cardBody);
        expect(cardImg).toHaveProperty('src', 'http://www.imgurl.com/');
        expect(cardImg).toHaveProperty('alt', 'card name');
        expect(cardTitle).toHaveTextContent('card name');
        expect(cardBody).toHaveTextContent('some description');
    });
});
