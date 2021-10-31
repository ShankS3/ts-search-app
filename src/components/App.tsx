import React from 'react';
import FeedsContainer from 'containers/FeedsContainer';
import 'styles/App.css';

function App() {
  return (
    <div className="root" data-testid="root">
      <FeedsContainer />
    </div>
  );
}

export default App;
