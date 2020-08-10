import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
        display: 'flex',
        flexFlow: 'column wrap',

        '& .MuiTextField-root': {
            marginBottom: '16px',
            
        },
    },

});

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
    padding: 0 32px;
    flex-flow: column wrap;
`;

export const TextContainer = props => {
    const Text = styled.div`
            align-self: center;
            margin: ${props.margin || '0px'};
        `
    return <Text>{props.children}</Text>;
}; 



