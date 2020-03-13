import React, {useState, useEffect} from 'react';

import './styles.css';

const UserDashboard = () => {
        const [user, setUser] = useState({});
        const [devicesList, setDeviceList] = useState([]);

        const server = "https://inhome-backend.herokuapp.com";
        const Username = localStorage.getItem('@inHome/username');

        //console.log(user.ProfileImage);
        useEffect(() => {
            async function loadUserData() {            
                const response = await fetch(`${server}/users/list?id=${Username}`
                );

                const data = await response.json();
                
                setUser(data);
            }
            
            async function loadDevices() {
                const response = await fetch(`${server}/devices`);
                const data = await response.json()
                console.log(data);
                setDeviceList(data);
            }

            loadUserData();
            loadDevices();
        }, []);


        return (
            <>
                <div id="Container">
                    <div className="Header">
                        <img 
                            style={{width:'300px', height:'300px', borderRadius:300}}
                            src={user.ProfileImage}
                            alt="new"
                        />
                        <div id="Username">
                            <h1>{user.Username}</h1>
                            <p>Este é seu usuário</p>
                        </div>
                    </div>

                    <div id="Ambients">
                        {
                            devicesList.forEach( (props) => {
                                console.log(props);
                            } )
                        }
                    </div>
                </div>

            </>
        );
}

export default UserDashboard;