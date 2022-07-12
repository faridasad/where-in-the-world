import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    width: 299px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    border-radius: 7px;
    cursor: pointer;
`

const Image = styled.img`
    object-fit: cover;
    width: 299px;
    height: 150px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
`

const DescriptionContainer = styled.div`
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .6em;
    padding-left: 1em;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;

`

const CountryName = styled.p`
    font-weight: 800;
    font-size: 16px;
`

const DescLine = styled.div`
    display: flex;
    align-items: center;
    gap: .2em;
`

const DescHeader = styled.p`
    font-weight: 600;
    font-size: 12px;
`

const DescData = styled.p`
    font-size: 12px;
`

const Country = ({link, name, population, region, capital}) => {

  return (
    <Link to={`/countries/${name}`}>
        <Container className='country-con'>
            <Image src={link}/>
            <DescriptionContainer>
                <CountryName>{name}</CountryName>
                <DescLine><DescHeader>Population: </DescHeader><DescData> {population}</DescData></DescLine>
                <DescLine><DescHeader>Region: </DescHeader><DescData> {region}</DescData></DescLine>
                <DescLine><DescHeader>Capital: </DescHeader><DescData> {capital}</DescData></DescLine>
            </DescriptionContainer>
        </Container>
    </Link>
  )
}

export default Country