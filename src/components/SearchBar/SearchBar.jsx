import React from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Rectangle = styled.div`
    width: 328px;
    height: 56px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
    display: flex;
    align-items: center;
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
            <SearchIcon /><RastauranteInput placeholder={'Restaurante'} />
        </Rectangle>
    )
}