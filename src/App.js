import React, { useReducer } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Address from './pages/Address'

import {UserContext, useUserInfo} from './contexts/UserInforContext'


function App() {
  const {userData, onChangeUserData, setUserData} = useUserInfo();


  return (
    <UserContext.Provider value={{userData, onChangeUserData,setUserData}} >
      <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/SignUp">
              <SignUp />
            </Route>
            <Route exact path="/SignUp/Addres">
              <Address />
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
