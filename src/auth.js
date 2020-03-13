import React, { Component } from "react";
import { Switch, Redirect, Route } from 'react-router-dom'

const isAuthenticated = () => {

    const conectado = localStorage.getItem("@inHome/username");
    console.log("Usuário " + conectado);

    if(conectado) return true;
    else return false;
}

export default isAuthenticated;