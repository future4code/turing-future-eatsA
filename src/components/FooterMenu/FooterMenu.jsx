import React from 'react'
import styled from 'styled-components'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const FooterContainer = styled.div`
    height: 6vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid lightgray;
`
const HomeIconActive = styled(HomeOutlinedIcon)`
    color: #5cb646;
`
const ShoppingIconActive = styled(ShoppingCartOutlinedIcon)`
    color: #5cb646;
`
const PersonIconActive = styled(PersonOutlineOutlinedIcon)`
    color: #5cb646;
`

export default function FooterMenu() {

    return (
        <FooterContainer>
            <HomeIconActive />
            <HomeOutlinedIcon color={'disabled'}/>
            <ShoppingIconActive />
            <ShoppingCartOutlinedIcon color={'disabled'} />
            <PersonIconActive />
            <PersonOutlineOutlinedIcon color={'disabled'} />
        </FooterContainer>
    )
}