import React from 'react';
import { useContext } from 'react';

import {UserContext}  from '../../context/UserInforContext'

import {Container, useStyles, TextContainer} from './LoginStyle'


import {Button, TextField, Typography} from '@material-ui/core'


export default props =>{
    const {userData, onChangeUserData} = useContext(UserContext);
    const classes = useStyles();
    
    return (
        <Container>
            <TextContainer margin='20px'>
                <Typography  className={classes.text}>Entrar</Typography>
            </TextContainer>    
            <form className={classes.root}>
                <TextField
                    label="Email:"
                    placeholder='email@email.com' 
                    variant="outlined"
                    required
                    type='email'
                    name='email'
                    value={userData.email}
                    onChange={onChangeUserData}
                />
                <TextField
                    label="Senha"
                    placeholder='Senha' 
                    variant="outlined"
                    required
                    type='password'
                    name='password'
                    value={userData.password}
                    onChange={onChangeUserData}
                />
                <Button variant='contained'>Logar</Button>
                <TextContainer margin='16px'>
                    <Typography  className={classes.text}>Não possui cadastro? Clique aqui.</Typography>
                </TextContainer>    
            </form>
        </Container>
    );

}