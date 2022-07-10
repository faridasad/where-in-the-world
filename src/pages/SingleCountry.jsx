import React, {useContext, useState, useEffect} from 'react'
import Header from '../components/Header'
import { KeyboardBackspace } from "@mui/icons-material";
import styled from 'styled-components';
import { ItemsContext } from './Home';
import { useParams, Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
`

const BackButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5em;
    padding: .25em .8em;
`

const CountryContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 5em;
`

const Image = styled.img`
`

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2em;

`

const Name = styled.h2`
    font-weight: 800;
    font-size: 1.5em;
`

const Details = styled.div`
    display: flex;
    gap: 3em;
`

const List = styled.ul`
    
`

const ListItem = styled.li`
    display: flex;
    list-style: none;
    gap: .5em;
    white-space: nowrap;
`

const BordersContainer = styled.div`
    display: flex;
    gap: .7em;
    margin-top: 2em;
`

const BorderText = styled.p`
    font-weight: 600;
`

const BorderSpan = styled.span`
    
`
const Bold = styled.p`
    font-weight: 600;
`

const SingleCountry = () => {

    const [items, setItems] = useState([])

    const { id } = useParams()


  return (
    <Container>
        <Header />
        <Link to="/"><BackButton><KeyboardBackspace /> Back</BackButton></Link>
        <CountryContainer>
            <Image src="//unsplash.it/400/290"/>
            <DetailsContainer>
                <Name>Belgium</Name>
                <Details>
                    <List>
                        <ListItem><Bold>Native Name: </Bold> Belgie</ListItem>
                        <ListItem><Bold>Population: </Bold> Belgie</ListItem>
                        <ListItem><Bold>Region: </Bold> Belgie</ListItem>
                        <ListItem><Bold>Sub Region: </Bold> Belgie</ListItem>
                        <ListItem><Bold>Capital: </Bold> Belgie</ListItem>
                    </List>
                    <List>
                        <ListItem><Bold>Top Level Domain: </Bold> Belgie</ListItem>
                        <ListItem><Bold>Currencies: </Bold> Belgie</ListItem>
                        <ListItem><Bold>Languages: </Bold> Belgie</ListItem>
                    </List>
                </Details>
                <BordersContainer>
                    <BorderText>Border Countries: </BorderText>
                    <BorderSpan>France</BorderSpan>
                    <BorderSpan>Germany</BorderSpan>
                    <BorderSpan>Netherlands</BorderSpan>
                </BordersContainer>
            </DetailsContainer>
        </CountryContainer>
    </Container>
  )
}

export default SingleCountry