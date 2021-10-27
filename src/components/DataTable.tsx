import React from 'react';

interface column {
    header: string;
    name: string;
}

interface data {
    [key: string]: string;
}

interface Props {
    columns: column[]
    data: data[]
}

const DataTable: React.FC<Props> = ({columns, data}) => {
    return (
        <div className="dataTable-container" data-testid="dataTable-container">
            <table className="dataTable" data-testid="dataTable">
                <thead className="dataTable-head" data-testid="dataTable-head">
                    <tr>
                        {columns.map(col => <th key={col.name}>{col.header}</th>)}
                    </tr>
                </thead>
                {data.length !== 0 && (
                    <tbody className="dataTable-body" data-testid="dataTable-body">
                        {data.map((row, index) =>
                        <tr key={index}>
                            {columns.map(col =>
                                <td key={col.name}>{row[col.name]}</td>
                            )}
                        </tr>
                        )}
                    </tbody>
                )}
            </table>
        </div>
    );
}

export default DataTable;
