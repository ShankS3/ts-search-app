import React from 'react';

interface column {
    header: string;
    name: string;
}
interface Props {
    columns: column[]
}

const DataTable: React.FC<Props> = ({columns}) => {
    return (
        <div className="dataTable-container" data-testid="dataTable-container">
            <table className="dataTable" data-testid="dataTable">
                <thead className="dataTable-head" data-testid="dataTable-head">
                    <tr>
                        {columns.map(col => <th key={col.name}>{col.header}</th>)}
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default DataTable;
