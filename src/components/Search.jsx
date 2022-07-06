import React from "react";
import styled from "styled-components";
import { SearchOutlined } from "@mui/icons-material";

const SearchContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

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

const Search = () => {
  return (
    <SearchContainer>
      <InputContainer>
        <SearchOutlined style={{ opacity: "68.8%" }}/>
        <Input placeholder="Search for a country..." />
      </InputContainer>
      <Filter>
        <FilterOption style={{ display: "none" }}>
          Filter By Region
        </FilterOption>
        <FilterOption>Africa</FilterOption>
        <FilterOption>America</FilterOption>
        <FilterOption>Asia</FilterOption>
        <FilterOption>Europe</FilterOption>
        <FilterOption>Ocenia</FilterOption>
      </Filter>
    </SearchContainer>
  );
};

export default Search;
