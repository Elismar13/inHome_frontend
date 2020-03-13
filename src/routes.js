import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

//O controle das rotas estão no arquivo "components/SuperiorBar"

//Paginas
import User from './Pages/User/User';
import Home from './Pages/Home/Home';
import UserDashboard from './Pages/UserDashboard/UserDashboard';

//Autenticação
import isAuthenticated from './auth';

const PrivateDashboard = ( { component: Component, ...rest } ) => (
    <Route {...rest} 
        render={props => 
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                 <Redirect to={{ pathname: "/users", state: { from: props.location } }} />
            )
        }
    />
);

const routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={User} />
        <Route path="/about" component={About} />
        <PrivateDashboard path="/dashboard" component={UserDashboard} isPrivate/>
    </Switch>
);

function About() { return (<h1>eafasfe</h1>) }


export default routes;