import React from 'react';

import FormBar from 'components/FormBar';
import 'styles/App.css';

function App() {

  return (
    <div className="App" data-testid="App">
      <h3 className="page-title" data-testid="page-title">Feed</h3>
      <FormBar />
      <div className="card-container" data-testid="card-container">
      </div>
    </div>
  );
}

export default App;
