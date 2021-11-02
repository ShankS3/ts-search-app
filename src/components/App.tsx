import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FeedsContainer from 'containers/FeedsContainer';
import 'styles/App.css';

function App() {
  return (
    <div className="root" data-testid="root">
      <Router>
        <Switch>
          <Route path="/" component={FeedsContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
