import React, { useContext } from 'react'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

import {Container, useStyles, Form } from './SignUpStyles';
import {UserContext}  from '../../contexts/UserInforContext'

import { TextField, Button, Typography, IconButton } from '@material-ui/core';

export default props =>{
    const classes = useStyles();
    const {userData, onChangeUserData, setUserData} = useContext(UserContext);
    const history = useHistory();

    const createAccount = event =>{
        event.preventDefault();
        
        const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup'
        const body = {
                name: userData.name,
                email: userData.email,
                cpf: userData.cpf,
                password: userData.password,           
        }
        Axios.post(baseUrl,body)
        .then( response => {
            setUserData({
                ...userData,
                name: response.data.user.name,
                email: response.data.user.email,
                cpf: response.data.user.cpf,
                id: response.data.user.id,
                token: response.data.token,  
            });
            localStorage.setItem('token',response.data.token);
            history.push('/SignUp/Addres');
        })
        .catch( error => {
            console.log(error);
        })

    }

    return (
        <Container>
            <Typography className={classes.text}>Cadastrar</Typography>
            <Form className={classes.root} onSubmit={createAccount}>
                <TextField 
                    onChange={onChangeUserData}
                    value={userData.name}
                    name='name'
                    variant='outlined'
                    label='Nome'
                    required
                    placeholder='Nome e sobrenome'
                    size='medium'
                />
                <TextField 
                    onChange={onChangeUserData}
                    value={userData.email}
                    name='email'
                    variant='outlined'
                    label='Email'
                    required
                    type='email'
                    placeholder='infoPlaceHolder'
                    size='medium'
                />
                <TextField
                    onChange={onChangeUserData}
                    value={userData.cpf}
                    name='cpf' 
                    variant='outlined'
                    label='CPF'
                    required
                    placeholder='000.000.000.00'
                    size='medium'
                />
                <TextField  
                    onChange={onChangeUserData}
                    value={userData.password}
                    name='password'
                    variant='outlined'
                    label='Senha'
                    required
                    type='password'
                    placeholder='Mínimo 6 caracteres'
                    size='medium'
                />
                <TextField
                    onChange={onChangeUserData}
                    value={userData.ConfirmPassword}
                    name='ConfirmPassword' 
                    variant='outlined'
                    label='Confirmar'
                    required
                    type='password'
                    placeholder='Confirme a senha anterior'
                    size='medium'
                />
                <Button color={'primary'} variant='contained' type='submit'>CRIAR</Button>
            </Form>
        </Container>
    );
}