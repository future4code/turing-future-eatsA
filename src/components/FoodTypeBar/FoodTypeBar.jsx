import React from 'react'
import styled from 'styled-components'

const FilterContainer = styled.div`
    width: 360px;
    height: 42px;
    display: flex;
    margin-left: 64px;
`
const ActiveFilter = styled.button`
    font-family: Roboto;
    font-size: 1rem;
    text-align: center;
    color: #5cb646;
    margin: 4px;
    cursor: pointer;
    outline: none;
    background: none;
    border: none;
`
const InativeFilter = styled.button`
    font-family: Roboto;
    font-size: 1rem;
    text-align: center;
    margin: 4px;
    cursor: pointer;
    outline: none;
    background: none;
    border: none;
`

export default function FoodTypeBar() {

    return (
        <FilterContainer>
            <ActiveFilter>ActiveFilter</ActiveFilter>
            <InativeFilter>InativeFilter</InativeFilter>
        </FilterContainer>
    )
}