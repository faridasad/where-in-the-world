import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  max-width: 600px;
  width: 70%;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  padding-bottom: 15em;
`;

const HeaderText = styled.h1`
  font-weight: 800;
  font-size: 3em;

  
  @media screen and (max-width: 350px) {
    font-size: 2em;
  }
`;

const Desc = styled.p`
  font-weight: 600;
  font-size: 2em;

  @media screen and (max-width: 350px) {
    font-size: 1.5em;
  }
`;

const Br = styled.div`
  height: 2px;
  width: 100%;
`;

const Error = () => {
  return (
    <>
      <Header />
      <Container>
        <HeaderText>4 0 4 !</HeaderText>
        <Br className="error-br"></Br>
        <Desc>Page Not Found!</Desc>
      </Container>
    </>
  );
};

export default Error;
