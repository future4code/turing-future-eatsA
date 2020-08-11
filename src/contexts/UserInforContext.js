import React, { useState } from 'react';



export const user = {
    user: {
        id: "",
        name: "",
        email: "",
        cpf: "",
        hasAddress: false
    },
    token: ""
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