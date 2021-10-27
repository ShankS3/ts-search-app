import React from 'react';
import { render } from '@testing-library/react';
import DataTable from 'components/DataTable';

describe('DataTable', () => {
    let getByTestId, container;

    const columns = [
        { header: 'ID', name: 'id' },
        { header: 'Name', name: 'name' },
        { header: 'Email', name: 'email' }
    ];

    let data = [];

    beforeEach(() => {
        ({ getByTestId, container } = render(<DataTable columns={columns} data={data} />));
    });

    test("renders DataTable", () => {
        expect(container.childElementCount).toEqual(1);
    });

    test("renders custom columns from props", () => {
        const dataTableContainer = getByTestId('dataTable-container');
        const dataTable = getByTestId('dataTable');
        const dataTableHead = getByTestId('dataTable-head');

        expect(dataTableContainer.childElementCount).toEqual(1);
        expect(dataTableContainer).toContainElement(dataTable);
        expect(dataTable.childElementCount).toEqual(1);
        expect(dataTableContainer).toContainElement(dataTableHead);
        expect(dataTableHead.childElementCount).toEqual(1);
        expect(dataTableHead).toContainHTML('<tr><th>ID</th><th>Name</th><th>Email</th></tr>');
    });
});
