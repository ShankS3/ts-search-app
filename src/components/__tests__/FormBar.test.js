import React from 'react';
import { render, screen } from '@testing-library/react';
import FormBar from 'components/FormBar';

test('renders input field', () => {
    render(<FormBar />);
    const searchInput = screen.getByTestId('search-text');

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'text');
    expect(searchInput).toHaveValue('');
});

test('renders select field', () => {
    render(<FormBar />);
    const sortSelect = screen.getByTestId('sort-select');

    expect(sortSelect).toBeInTheDocument();
    expect(sortSelect).toHaveValue('');
});
