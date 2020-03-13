import React from 'react';

import axios from 'axios';

const server = "http://localhost:3333";

const UserRequest = async () => {
    const user = localStorage.getItem('@inHome/username');
    const pass = localStorage.getItem('@inHome/password');

    //realizando requisição ao servidor
    const { data } = await axios.get(server + '/users/list', {
        params: {
            id : user
        }
    });


    return data;
}

export default UserRequest;