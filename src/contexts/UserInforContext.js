import React, { useState } from 'react';



export const user = {
    name: "",
    email: '',
    cpf: "",
    password: "",
    token: '',
}


export const useUserInfo = () =>{
    const [userData, setUserData] = useState(user);

    const onChangeUserData = event =>{
        const {name, value} = event.target;

        setUserData({...userData, [name] : value})
    }       
    return {userData, onChangeUserData, setUserData}
}

export const UserContext = React.createContext();