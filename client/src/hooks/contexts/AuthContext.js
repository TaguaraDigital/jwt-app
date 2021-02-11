import React, { createContext, useState } from 'react';
import HomeFinder from "../../services/apis/Home";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState({});
  const [invoices, setInvoices] = useState(null)
  const [invoicesAll, setInvoicesAll] = useState(null)
  const [monto, setMonto] = useState(0);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  const checkAuthenticated = async () => {
    try {
      // const data = await RegisterFinder.verify();
      const data = await HomeFinder.home();

      if (data.success) {
        setCurrentUser(p => data.data);
        setIsAuthenticated(true);
    } else {
        setCurrentUser({});
        setIsAuthenticated(false);
    } 
 
    } catch (err) {
      console.error(err.message)
    }
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
}

const value = {
    currentUser,
    setCurrentUser,
    invoices,
    setInvoices,
    monto,
    setMonto,
    invoicesAll,
    setInvoicesAll,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthenticated,
    setAuth,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider;