import { GlobalStyle } from "./globalStyles";
import { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { AuthContext } from "./hooks/contexts/AuthContext";

import './App.css';

import Landing from "./views/Landing";
import Login from "./views/Access/Login";
import Register from "./views/Access/Register";
import Home from "./views/Home/Home";
import Invoice from "./views/invoices";
import InvoicePayments from "./views/invoices/InvoicesPayments";

const App = () => {

  const { isAuthenticated, setIsAuthenticated, checkAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    checkAuthenticated();
  }, []);

  return (
      <Router >
      <GlobalStyle />
        <Switch>
          <Route exact path='/' component={ !isAuthenticated ? Landing : Home }  />
          <Route exact path='/login' component={!isAuthenticated ? Login : Home } />
          <Route exact path='/register' component={!isAuthenticated ? Register  : Home }  />
          <Route exact path='/home' component={isAuthenticated ? Home : Landing } />
          <Route exact path='/invoice' component={isAuthenticated ? Invoice : Landing } />
          <Route exact path='/payment' component={isAuthenticated ? InvoicePayments : Landing } />
          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
