import React, { useState } from 'react';
import axios from 'axios';

import './styles.css';

//Pagina de DashBoard
import UserDashboard from '../UserDashboard/UserDashboard';
import isAuthenticated from '../../auth';

export default function User() {  


    const handleSubmit = event => {
        event.preventDefault();

        const user = event.target.elements.username.value;
        const password = event.target.elements.password.value;

        console.log("AAAA", user,password);
        //window.location.reload(); //Recarregar a pagina

        //Enviar a solicitação ao servidor backend
        
        //Em seguida salvando no armazenamento do navegador
        localStorage.setItem('@inHome/username', user);
        localStorage.setItem('@inHome/password', password);

        //Redirecionar o usuário
        window.location.pathname = "/dashboard";
    }

    return (    
        <>   
            <div id="login">
                <div id="input">
                    <form onSubmit={handleSubmit}>
                        <label>Usuário:</label><br></br>
                        <input 
                            type="text"
                            name="username"
                            placeholder="Seu usuário"
                            required
                        /><br></br>

                        <label>Senha:</label><br></br>
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Sua senha"
                            required>
                        </input> 
                        <div id="botoes">
                            <button type="submit">Entrar</button>
                            <button type="reset">Limpar</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    );

}

