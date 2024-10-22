"use client";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
  }
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 940px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Open Sans', sans-serif;
`;


export const Nav = styled.nav`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: white;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Logo = styled.div`
  // font-size: 1.5rem;
  font-weight: bold;
  align-items: center;
  display: flex;
  
  gap: 2rem;
`;


export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: black;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #E297EC;
    transition: 0.3s ease;
    }
`;



export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;

  @media (max-width: 768px) {
    display: block;
  }
`;


export const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  background-color: #333;
  padding: 1rem;
  color: black;

  a {
    padding: 0.5rem 0;
    color: white;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;


export const GradientButton = styled.a`
  padding: 8px 20px;
  border-radius: 12px;
  background: linear-gradient(to right, #7E5ED3, #E297EC);
  font-size: 12pt;
  color: white;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;

  &:hover {
    opacity: 0.9;
    color: white;
    transition: 0.3s ease;
  }
`;
