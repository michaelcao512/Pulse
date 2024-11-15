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

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 6rem;
  height: 150vh;
  width: 100%;
  background-color: #f5f5f5;

  h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 2rem;
    margin: 1rem 0;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
    padding-bottom: 2rem;
    font-weight: 500;
  }

  p {
    font-size: 1.25rem;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

// Slideshow Section for features
export const SlideshowSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  width: 100%;
  background-color: #ffffff;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .slideshow-container {
    width: 80%;
    max-width: 1200px;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }

  .slideshow-content {
    display: flex;
    transition: transform 0.5s ease-in-out;
    // Placeholder styling for slides
    div {
      min-width: 100%;
      padding: 2rem;
      text-align: center;
      background-color: #f0f0f0;
      border-radius: 12px;
    }
  }
`;