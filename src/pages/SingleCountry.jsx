import React, {useContext} from 'react'
import Header from '../components/Header'
import { KeyboardBackspace } from "@mui/icons-material";
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom'
import { MainContext } from '../App';

const Container = styled.div`
    width: 100%;
`

const BackButton = styled.button`
    width: 125px;
    border: none;
    margin-left: 4em;
    border-radius: 3px;
    padding: .25em 1em;
    margin-top: 1em;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`

const CountryContainer = styled.div`
padding: 0 4em;
height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 5em;
    gap: 7em;
`

const Image = styled.img`
    display: block;
    width: 100%;
    max-width: 500px;
    aspect-ratio: 1.75 / 1;
    object-fit: fill;
`

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

const Name = styled.h2`
    font-weight: 800;
    font-size: 1.5em;
`

const Details = styled.div`
    display: flex;
    flex-wrap: wrap;
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
    const { id } = useParams()

    const {items} = useContext(MainContext)
    

    const item = items.find(i => i.name.common === id)

  return (
    <Container>
        <Header />
        <BackButton className="button-con"><Link style={{display: "flex", alignItems: "center", justifyContent: "center", gap: ".5em" }} to="/"><KeyboardBackspace /> Back</Link></BackButton>
        {item &&
        <CountryContainer>
            <Image src={item.flags.png}/>
            <DetailsContainer>
                <Name>{item.name.common}</Name>
                <Details>
                    <List>
                        <ListItem><Bold>Native Name: </Bold></ListItem>
                        <ListItem><Bold>Population: </Bold> {item.population}</ListItem>
                        <ListItem><Bold>Region: </Bold> {item.region}</ListItem>
                        <ListItem><Bold>Sub Region: </Bold> {item.subregion}</ListItem>
                        <ListItem><Bold>Capital: </Bold> {item.capital}</ListItem>
                    </List>
                    <List>
                        <ListItem><Bold>Top Level Domain: </Bold> {item.tld}</ListItem>
                        <ListItem><Bold>Currencies: </Bold></ListItem>
                        <ListItem><Bold>Languages: </Bold>{}</ListItem>
                    </List>
                </Details>
                <BordersContainer>
                    <BorderText>Border Countries: </BorderText>
                    
                </BordersContainer>
            </DetailsContainer>
        </CountryContainer>
        }
    </Container>
  )
}

export default SingleCountry