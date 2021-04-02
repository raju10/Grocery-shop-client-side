import "./App.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Order from "./Components/Order/Order";
import Admin from "./Components/Admin/Admin";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ManageProducts from "./Components/ManageProducts/ManageProducts";
import AdmainManagesAllPrd from "./Components/AdmainManagesAllPrd/AdmainManagesAllPrd";

export const UserContext = createContext();
export const SelectProductContext = createContext();
function App() {
  const [loginUser, setLoginUser] = useState({});
  const [selcProducts, setSelcProducts] = useState({
    name: "",
    img: "",
    price: "",
  });
  return (
    <SelectProductContext.Provider value={[selcProducts, setSelcProducts]}>
      <UserContext.Provider value={[loginUser, setLoginUser]}>
        <h3>email : {loginUser.email}</h3>
        <p>user name : {loginUser.userName}</p>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/manageProducts">
              <ManageProducts></ManageProducts>
            </PrivateRoute>
            <Route path="/admain-manages-product">
              <AdmainManagesAllPrd></AdmainManagesAllPrd>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </SelectProductContext.Provider>
  );
}

export default App;
