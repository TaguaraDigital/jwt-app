import { useContext, useEffect, useState } from 'react';
import Header from "../../components/layout/Header";
import {AuthContext} from "../../hooks/contexts/AuthContext"

const Home = () => {

    const { currentUser, setCurrentUser, checkAuthenticated, setAuth, logout} = useContext(AuthContext);
    
    useEffect(() => {
        checkAuthenticated()
    },[])

    return (
        <>
            <Header page="home" />
            <h1>Estamos en el Home Page de los clientes y para llegar aqui se debe autenticado</h1>
            <h2>Welcome {currentUser.user_name}</h2>
            <p> Your balance is currentUser : {currentUser.user_initial_balance} </p>

            <button onClick={ (e) => logout(e)}>Log out</button>

        </>
    )
}

export default Home;