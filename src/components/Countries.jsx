import React from 'react'
import styled from 'styled-components'
import Country from './Country'

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2em;
`


const Countries = ({countries, query}) => {

  return (
    <Container>
       {
        countries.map((item, key)=> {
            return <Country
                id={item.idd.root}
                query={query}
                key={key}
                link={item.flags.png}
                name={item.name.common}
                population={item.population}
                region={item.region}
                capital={String(item.capital)}
            />
        })
       }
    </Container>
  )
}

export default Countries