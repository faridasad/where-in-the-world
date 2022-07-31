import React, { useContext, memo } from "react";
import Header from "../components/Header";
import { KeyboardBackspace } from "@mui/icons-material";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { MainContext } from "../App";

const Container = styled.div`
  width: 100%;
`;

const BackButton = styled.button`
  width: 125px;
  border: none;
  margin-left: 4em;
  border-radius: 3px;
  padding: 0.25em 1em;
  margin-top: 3em;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const CountryContainer = styled.div`
  padding: 0 4em;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 7em;
  padding-bottom: 15em;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1.75 / 1;
  object-fit: fill;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 1200px) {
    transform: translateY(-5em);
  }
`;

const Name = styled.h2`
  font-weight: 800;
  font-size: 1.5em;
`;

const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3em;
`;

const List = styled.ul``;

const ListItem = styled.li`
  display: flex;
  list-style: none;
  gap: 0.5em;
  white-space: nowrap;
`;

const BordersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7em;
  margin-top: 2em;
  flex-wrap: wrap;
`;

const BorderText = styled.p`
  font-weight: 600;
`;

const BorderSpan = styled.span`
  padding: 0.2em 0.7em;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;
const Bold = styled.p`
  font-weight: 600;
`;

const SingleCountry = () => {
  const { id } = useParams();
  const { items } = useContext(MainContext);
  const item = items.find((i) => i.name.common === id);

  return (
    <Container>
      <Header />
      <BackButton className="button-con">
        <Link
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: ".5em",
          }}
          to="/"
        >
          <KeyboardBackspace /> Back
        </Link>
      </BackButton>
      {item && (
        <CountryContainer>
          <Image src={item.flags.png} />
          <DetailsContainer>
            <Name>{item.name.common}</Name>
            <Details>
              <List>
                <ListItem>
                  <Bold>Native Name: </Bold>
                  {Object.entries(item.name.nativeName)[0][1].official}
                </ListItem>
                <ListItem>
                  <Bold>Population: </Bold>{" "}
                  {item.population
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </ListItem>
                <ListItem>
                  <Bold>Region: </Bold> {item.region}
                </ListItem>
                <ListItem>
                  <Bold>Sub Region: </Bold> {item.subregion}
                </ListItem>
                <ListItem>
                  <Bold>Capital: </Bold> {item.capital}
                </ListItem>
              </List>
              <List>
                <ListItem>
                  <Bold>Top Level Domain: </Bold> {item.tld}
                </ListItem>
                <ListItem>
                  <Bold>Currencies: </Bold>
                  {Object.entries(item.currencies).map((c, index) => {
                    return <span key={index}>{c[1].name} | </span>;
                  })}
                </ListItem>
                <ListItem>
                  <Bold>Languages: </Bold>
                  {Object.entries(item.languages).map((l, index) => {
                    l.shift();
                    return <span key={index}>{l[0]} |</span>;
                  })}
                </ListItem>
              </List>
            </Details>
            <BordersContainer>
              <BorderText>Border Countries: </BorderText>
              {!item.borders ? (
                <BorderSpan className="border-con">Not any borders</BorderSpan>
              ) : (
                Object.entries(item.borders).map((b, index) => {
                  b.shift();
                  return (
                    <BorderSpan className="border-con" key={index}>
                      {b[0]}
                    </BorderSpan>
                  );
                })
              )}
            </BordersContainer>
          </DetailsContainer>
        </CountryContainer>
      )}
    </Container>
  );
};

export default memo(SingleCountry);
