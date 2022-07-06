import React, {useState, useEffect} from 'react'
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


const Countries = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setItems(data))


    }, [])

    

  return (
    <Container>
       {
        items.map((item, key)=> {
            return <Country 
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