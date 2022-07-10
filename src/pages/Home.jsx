import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Countries from "../components/Countries";
import Header from "../components/Header";
import Search from "../components/Search";
import SingleCountry from "./SingleCountry";

export const ItemsContext = React.createContext()

const Home = () => {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");
    const [query, setQuery] = useState("");
    const [region, setRegion] = useState("")
  
    
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
    <ItemsContext.Provider value={items}>
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
    </ItemsContext.Provider>
    </>
  )
}

export default Home