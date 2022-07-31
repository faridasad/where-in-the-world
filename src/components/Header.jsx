import React, { useContext, useEffect, memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DarkModeOutlined, DarkMode } from "@mui/icons-material";
import { MainContext } from "../App";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme, GlobalStyles } from "../theme";

const HeaderContainer = styled.div`
  padding: 0 4em;
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    padding: 0 1em;
  }
`;

const HeaderText = styled.h1`
  font-size: 20px;
  font-weight: 800;
`;

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5em;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  opacity: 88.8%;
`;

const Header = () => {
  const { theme, setTheme } = useContext(MainContext);
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, [theme]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <HeaderContainer className="header-con">
        <GlobalStyles />
        <Link to="/">
          <HeaderText>Where in the world?</HeaderText>
        </Link>
        <ToggleButton
          className="toggle-con"
          onClick={() => setTheme(toggleTheme)}
        >
          {isDarkTheme ? <DarkMode /> : <DarkModeOutlined />} Dark Mode
        </ToggleButton>
      </HeaderContainer>
    </ThemeProvider>
  );
};

export default memo(Header);
