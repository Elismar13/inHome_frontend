import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

//Assets
import './styles.css';
import logo from '../../assets/logo.png';

//Rotas
import Routes from '../../routes';



//Autenticação
import isAuthenticated from '../../auth';

const SideBar = () => {
    return (
        <>
            <Router>
                <header id="Header">
                    <div id="inHome">
                        <img src={logo} width="30" height="30"></img>
                        <span id="inHome">inHome</span>
                    </div>
                    
                    <div>
                        <div id="Router" >
                                <a href="/">Boas vindas</a>
                                <a href="/about">Ambientes</a>
                                <a href="/users">Usuário</a>
                            {/* A <Switch> looks through its children <Route>s and
                                renders the first one that matches the current URL. */}
                        </div>
                    </div>
                </header>

                <div className='container'>
                    <Routes />
                </div>
            </Router>

        </>
        
    );


}

export default SideBar;