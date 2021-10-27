import React from 'react';
import { render } from '@testing-library/react';
import DataTable from 'components/DataTable';

describe('DataTable', () => {
    let getByTestId, container, rerender;

    const columns = [
        { header: 'ID', name: 'id' },
        { header: 'Name', name: 'name' },
        { header: 'Email', name: 'email' }
    ];

    const data = [
        { id: 5, name: 'John', email: 'john@example.com' },
        { id: 6, name: 'Liam', email: 'liam@example.com' },
        { id: 7, name: 'Maya', email: 'maya@example.com', someTest: 10 }
    ];

    beforeEach(() => {
        ({ getByTestId, container, rerender } = render(<DataTable columns={columns} data={[]} />));
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
        expect(dataTable).toContainElement(dataTableHead);
        expect(dataTableHead.childElementCount).toEqual(1);
        expect(dataTableHead).toContainHTML('<tr><th>ID</th><th>Name</th><th>Email</th></tr>');
    });

    test("renders dynamic data from props", () => {
        rerender(<DataTable columns={columns} data={data} />);

        const dataTable = getByTestId('dataTable');
        const dataTableBody = getByTestId('dataTable-body');
        expect(dataTable.childElementCount).toEqual(2);
        expect(dataTable).toContainElement(dataTableBody);
        expect(dataTableBody.childElementCount).toEqual(3);
    });
});
