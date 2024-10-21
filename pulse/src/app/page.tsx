"use client";
import { useState } from "react";
import Image from "next/image";
import { GlobalStyle, Container, Nav, Logo, Links, StyledLink, Hamburger, MobileMenu, GradientButton } from "./Styles/GeneralStyles";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Nav>
        <Links>
          <Image src="/src/logo.png" alt="Logo" width={50} height={20} />
          <StyledLink href="#link1">Home</StyledLink>
          <StyledLink href="#link2">About</StyledLink>
          <StyledLink href="#link3">Contact</StyledLink>
        </Links>
        <Links>
          <StyledLink href="#link1">Sign In</StyledLink>

          <GradientButton href="#signup">Sign Up</GradientButton>
        </Links>
        <Hamburger onClick={toggleMobileMenu}>
          &#9776;
        </Hamburger>
      </Nav>

      {isMobileMenuOpen && (
        <MobileMenu>
          <a href="#link1">Home</a>
          <a href="#link2">About</a>
          <a href="#link3">Contact</a>
          <GradientButton href="#signup">Sign Up</GradientButton>
        </MobileMenu>
      )}

      <Container>
        <h1>hi</h1>
      </Container>
    </>
  );
}
