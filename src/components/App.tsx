import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedsContainer from 'containers/FeedsContainer';
import 'styles/App.css';

function App() {
  return (
    <div className="root" data-testid="root">
      <Switch>
        <Route exact path="/(page)?/:page?/(search)/:searchText?/(sortBy)/:sort?"  component={FeedsContainer} />
      </Switch>
    </div>
  );
}

export default App;
