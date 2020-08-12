import React from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Rectangle = styled.div`
    width: 90vw;
    height: 8vh;
    border-radius: 2px;
    border: solid 1px lightgrey;
    display: flex;
    align-items: center;
    margin: 8px 16px;
`
const RastauranteInput = styled.input`
    outline: none;
    border: none;
`
const SearchIcon = styled(SearchOutlinedIcon)`
    margin-left: 8px;
`

export default function SearchBar() {

    return (
        <Rectangle>
            <SearchIcon color={'disabled'}/><RastauranteInput placeholder={'Restaurante'} />
        </Rectangle>
    )
}