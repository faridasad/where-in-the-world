import React from 'react'
import styled from 'styled-components'
import {DarkModeOutlined} from '@mui/icons-material';


const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2em;
`

const HeaderText = styled.h1`
    font-size: 20px;
    font-weight: 800;
`

const ToggleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .5em;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    opacity: 88.8%;
`

const Header = () => {
  return (
    <HeaderContainer>
        <HeaderText>Where in the world?</HeaderText>
        <ToggleContainer><DarkModeOutlined /> Dark Mode</ToggleContainer>
    </HeaderContainer>
  )
}

export default Header