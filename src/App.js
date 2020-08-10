import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import SignUp from './components/SignUp/SignUp';

import {UserContext, useUserInfo} from './contexts/UserInforContext'

function App() {
  const {userData, onChangeUserData} = useUserInfo();
  
  return (
    <UserContext.Provider value={{userData, onChangeUserData}} >
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
    </UserContext.Provider>
  );
}

export default App;
