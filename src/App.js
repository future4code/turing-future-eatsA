import React, { useReducer } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import SignUp from './components/SignUp/SignUp';

import {UserContext, useUserInfo} from './contexts/UserInforContext'
import CartContext from './contexts/CartContext'

import { initialState, CartReducer } from './reducers/CartReducer'

import Restaurants from './components/Restaurants/Restaurants'
import Cart from './components/Cart/Cart'

function App() {
  const {userData, onChangeUserData, setUserData} = useUserInfo();
  const [state, dispatch] = useReducer(CartReducer, initialState)

  return (
    <UserContext.Provider value={{userData, onChangeUserData,setUserData}} >
      <CartContext.Provider value={{state, dispatch}}>
        <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <Route exact path="/restaurant/:id">
                <Restaurants />
              </Route>
              <Route exact path="/cart">
                <Cart />
              </Route>
              <Route path="/">
                <div>Opa! Erro 404!</div>
              </Route>
            </Switch>
          </BrowserRouter>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;

/* <Restaurants /> */