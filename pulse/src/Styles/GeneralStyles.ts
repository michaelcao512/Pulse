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

// Updated container to span the full width
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;  /* Spans full width of the page */
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Open Sans', sans-serif;
`;

export const StyledHeroSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.9rem;
  height: 100vh;
  width: 100%; /* Full width */
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    gap: 2rem;
  }
`;

// Navigation bar styles spanning the full width
export const Nav = styled.nav`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Logo styles
export const Logo = styled.div`
  font-weight: bold;
  align-items: center;
  display: flex;
  gap: 2rem;
`;

// Links in the navbar
export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: black;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Styled individual link
export const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #E297EC;
    transition: 0.3s ease;
  }
`;

// Hamburger menu for mobile
export const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  font-size: 2rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Mobile menu for smaller screens
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

  button { 
    background-color: #7E5ED3;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    text-decoration: none;
    width: auto;
  }
`;

// Gradient button with hover effect
export const GradientButton = styled.a`
  padding: 8px 20px;
  border-radius: 12px;
  background: linear-gradient(to right, #7E5ED3, #E297EC);
  font-size: 12pt;
  color: white;
  text-decoration: none;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  transition: opacity 0.5s ease-in, box-shadow 0.5s ease-in;

  &:hover {
    opacity: 0.9;
    color: white;
    transition: opacity 0.5s ease-out, box-shadow 0.5s ease-out;
    box-shadow: 0 0 2px rgba(64, 64, 64, 0.4), 0 0 10px rgba(64, 64, 64, 0.3), 0 0 7px rgba(64, 64, 64, 0.2);
  }
`;

// Gradient background div
export const GradientDiv = styled.div`
  background: linear-gradient(to right, #7E5ED3, #E297EC);
  padding: 60px 120px;
  border-radius: 12px;
  // width: 100%; /* Make it span full width */
`;

// Horizontal div layout
export const HorizontalDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

// Vertical div layout
export const VerticalDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

// Hero section styles spanning the full width
export const HeroSection = styled.section`
  display: flex;
  // justify-content: space-between;
  align-items: center;
  padding: 2.9rem;
  height: 100vh;
  width: 100%; /* Full width */
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
    gap: 2rem;
  }
`;

// Hero text block
export const HeroText = styled.div`
  flex: 1;
  padding-right: 5rem;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    weight: 800;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

// Hero image section
export const HeroImage = styled.div`
  flex: 1;

  img {
    max-width: 100%;
    height: auto;
    // border-radius: 12px;
  }
`;
