import React from 'react';
import Axios from 'axios';

import { useContext } from 'react';

import {UserContext}  from '../../contexts/UserInforContext'

import {Container, useStyles, TextContainer} from './LoginStyle'


import {Button, TextField, Typography} from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login';

export default props =>{
    const history =  useHistory();
    const {userData, onChangeUserData,} = useContext(UserContext);
    const [userErro, setUserErro ] = useState(false);
    const [passwordErro, setPasswordErro ] = useState(false);
    const classes = useStyles();
    
    const login = event =>{
        event.preventDefault();
        Axios.post(baseUrl, { email: userData.email, password: userData.password} )
            .then( response => {
                userData = response.data
                setUserErro(false)
                setPasswordErro(false)
            })
            .catch( error => {
                setUserErro(true)
                setPasswordErro(true)
            });
    }

    const onChange = event =>{
        onChangeUserData(event);
        setUserErro(false);
        setPasswordErro(false);
    }

    return (
        <Container>
            <TextContainer margin='20px'>
                <Typography  className={classes.text}>Entrar</Typography>
            </TextContainer>    
            <form className={classes.root} onSubmit={login}>
                <TextField
                    error={userErro}
                    helperText={userErro ? "Email invalido" : ''}
                    label="Email:"
                    placeholder='email@email.com' 
                    variant="outlined"
                    required
                    type='email'
                    name='email'
                    value={userData.email}
                    onChange={onChange}
                />
                <TextField
                    error={passwordErro}
                    helperText={ passwordErro ? "Senha Incorreta" : ''}
                    label="Senha"
                    placeholder='Senha' 
                    variant="outlined"
                    required
                    type='password'
                    name='password'
                    value={userData.password}
                    onChange={onChange}
                />
                <Button 
                    variant='contained'
                    type='submmit'
                    >Logar</Button>
                <TextContainer margin='16px'>
                    <Typography  className={classes.text}>Não possui cadastro? <Button>Clique aqui.</Button></Typography>
                </TextContainer>    
            </form>
        </Container>
    );

}