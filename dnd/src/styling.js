import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
 

export const AppStyled = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BottomContent = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: slategray;
    
    select {
        margin: 10px 10px;
    }
`

export const NavBar = styled.div `
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: space-between;
`

export const Links = styled(NavLink) `
    margin: 2%;
    text-decoration: none;
    color: white;
`

export const SpellGridStyled = styled.div `
    width: 100%;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
`

export const CharacterGridStyled = styled.div `
    width: 100%;
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
`

export const SpellCardStyled = styled.div `
    width: 75%;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    margin: 1% auto;
    padding: 1%;

    h3 {
        margin: 5px 0 0 0;
        font-size: 1.5rem;
    }

    :hover {
        background-color: lightgrey;
    }
`

export const SpellLevel = styled.span `
    font-size: 0.9rem;
    font-style: italic;
    margin: 5px 0 0;
`

export const SpellCardDataStyled = styled.div `
    font-size: 1rem;
    margin-top: 5px;
    font-style: none;
    display: flex;

    h5{
        margin: 0;
        font-size: 1rem;
    }

    p{
        margin: 0 0 0 10px;
    }
`

export const SpellEffect = styled.div `
    margin: 15px 0 0;
`

export const SpellButtonStyled = styled.button `
    width: 20%;
    background-color: grey;
    color: white;
    border-radius: 8px;
    padding: 1%;
    margin: 15px 40% 0;

    :hover {
        background-color: black;
    }
`
