import React, {memo} from "react";
import styled from "styled-components";
import { SearchOutlined } from "@mui/icons-material";

const SearchContainer = styled.div`
  padding: 0 4em;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 1em;
  }
`;

const InputContainer = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1em;
`;

const Input = styled.input`
  background: transparent;
  flex: 1;
  font-size: 14px;
  outline: 0;
  border: none;
  padding: 0.9em 0;
  padding-right: 4em;
  @media screen and (max-width: 350px) {
    width: 60%;
  }
`;

const Filter = styled.select`
  border-radius: 3px;
  padding: 0.5em;
  border: 1px solid transparent;
  outline: 0;
`;

const FilterOption = styled.option``;

const Search = ({
  inputValue,
  handleInputChange,
  regionValue,
  handleRegionChange,
}) => {
  console.log("search rendered")
  return (
    <SearchContainer>
      <InputContainer
        className="input-con"
        style={{ paddingLeft: "2em", borderRadius: "4px" }}
      >
        <SearchOutlined />
        <Input
          className="input"
          value={inputValue}
          placeholder="Search for a country..."
          onChange={handleInputChange}
        />
      </InputContainer>
      <Filter
        value={regionValue}
        onChange={handleRegionChange}
        className="filter-con"
      >
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

export default memo(Search);
