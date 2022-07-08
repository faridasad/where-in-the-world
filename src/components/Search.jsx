import React, { useState } from "react";
import styled from "styled-components";
import { SearchOutlined } from "@mui/icons-material";

const SearchContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Form = styled.form`
  
`

const InputContainer = styled.div`
  padding: 0.25em 1.5em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
`;

const Input = styled.input`
  font-size: 14px;
  outline: 0;
  border: none;
  padding: 0.25em 0;
  padding-right: 4em;
  opacity: 68.8%;

`;

const Filter = styled.select`
  padding: 0.5em;
  border: 1px solid transparent;
  outline: 0;
`;

const FilterOption = styled.option`
  margin-top: 3px;
`;


const Search = ({inputValue, handleInputChange, regionValue, handleRegionChange}) => {


  return (
    <SearchContainer>
      <InputContainer>
        <SearchOutlined style={{ opacity: "68.8%" }}/>
          <Input value={inputValue} placeholder="Search for a country..." onChange={handleInputChange} />
      </InputContainer>
      <Filter value={regionValue} onChange={handleRegionChange}>
        <FilterOption style={{ display: "none" }}>
          Filter By Region
        </FilterOption>
        <FilterOption value="africa">Africa</FilterOption>
        <FilterOption value="america">America</FilterOption>
        <FilterOption value="asia">Asia</FilterOption>
        <FilterOption value="europe">Europe</FilterOption>
        <FilterOption value="oceania">Oceania</FilterOption>
      </Filter>
    </SearchContainer>
  );
};

export default Search;