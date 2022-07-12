import React, { useState, useEffect, useContext } from "react";
import { MainContext } from "../App";
import Countries from "../components/Countries";
import Header from "../components/Header";
import Search from "../components/Search";


const Home = () => {
    const [input, setInput] = useState("");
    const [query, setQuery] = useState("");
    const [region, setRegion] = useState("");
  

    const {items, setItems} = useContext(MainContext)

    
  useEffect(() => {
    const showAll = async () => {
      await fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setItems(data));
    };

    const fetchCountries = async () => {
      await fetch(`https://restcountries.com/v3.1/name/${query}`)
        .then((res) => res.json())
        .then((data) => {
          data.status == 404 ? console.log("erorrr") : setItems(data)
        })
    };
    query.length === 0 ? showAll() : fetchCountries();
  }, [query]);

  useEffect(() => {
    const fetchCountriesbyFilter = async () => {
      await fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then((res) => res.json())
        .then((data) => {
          data.status == 404 ? console.log("erorrr") : setItems(data)
        })
    };
    region.length !== 0 && fetchCountriesbyFilter()
  }, [region])


  return (
    <>
        <Header />
        <Search
        inputValue={input}
        handleInputChange={(e) => {
            setInput(e.target.value);
            setQuery(e.target.value);
        }}
        regionValue={region}
        handleRegionChange={(e) => {setRegion(e.target.value)}}
        />
        <Countries countries={items} query={query} />
    </>
  )
}

export default Home