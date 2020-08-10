import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <div>Opa! Erro 404!</div>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
