import React from 'react';

import FormBar from 'components/FormBar';
import InfoCard from 'components/InfoCard';
import DataTable from 'components/DataTable';
import { columnArray, dataArray } from 'constants/types';
import 'styles/App.css';

function App() {

  const data: dataArray = [];

  const headers: columnArray = [
    {header: 'Name', name: 'name'},
    {header: 'Image', name: 'image'},
    {header: 'Description', name: 'description'},
    {header: 'Date Last Edited', name: 'dateLastEdited'},
  ]

  return (
    <div className="App" data-testid="App">
      <h3 className="page-title" data-testid="page-title">Feed</h3>
      <FormBar />
      <div className="card-container" data-testid="card-container">
        {data.map(d => <InfoCard key={d.dateLastEdited} data={d} />)}
      </div>
      <DataTable columns={headers} data={data} />
    </div>
  );
}

export default App;
