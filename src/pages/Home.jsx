import React, { useState, useEffect, useContext, useMemo, memo } from "react";
import { MainContext } from "../App";
import Countries from "../components/Countries";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Search from "../components/Search";

const Home = () => {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const { items, setItems } = useContext(MainContext);

  useEffect(() => {
    const showAll = async () => {
      await fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setItems(data));

      setIsLoaded(!isLoaded);
    };
    showAll();
  }, []);

  const filteredCountries = useMemo(() => {
    return items.filter((item) => {
      return (
        item.name.common.toLowerCase().includes(query.toLowerCase()) &&
        item.region.toLowerCase().includes(region.toLowerCase())
      );
    });
  }, [items, query, region]);

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
        handleRegionChange={(e) => {
          setRegion(e.target.value);
        }}
      />
      {!isLoaded ? (
        <Loader />
      ) : (
        <Countries countries={filteredCountries} query={query} />
      )}
    </>
  );
};

export default memo(Home);
