"use client";
import { useState } from "react";
import Image from "next/image";
import logo from '@/logo.png';
import { GlobalStyle, Container, Nav, Logo, Links, StyledLink, Hamburger, MobileMenu, GradientButton, GradientDiv, HorizontalDiv, VerticalDiv, HeroSection, HeroText, HeroImage, StyledHeroSection } from "@/Styles/GeneralStyles";
import heroImage from '@/hero-img.png';
import TypewriterText from '@/components/TypewriterText';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      {/* <Container>
        <HeroSection>
          <HeroText>
            <h1>Welcome to Pulse</h1>
            <p>We offer top-notch services to help achieve your user</p>
            <TypewriterText text="research and testing goals." />
            <GradientButton href="#signup">Get Started</GradientButton>
          </HeroText>

          <HeroImage>
            <Image src={heroImage} alt="Hero" />
          </HeroImage>
        </HeroSection>

      </Container> */}

      <Container>
        <StyledHeroSection>
          <VerticalDiv>
            <HeroText>
              <h1>Welcome to Pulse</h1>
              <p>We offer top-notch services to help achieve your user</p>
              <TypewriterText textArray={['research', 'testing', 'goals']} />
            </HeroText>
            <GradientButton href="#signup">Get Started</GradientButton>
          </VerticalDiv>

          {/* <HeroImage>
            <Image src={heroImage} alt="Hero" />
          </HeroImage> */}
        </StyledHeroSection>
      </Container>

      <Container>
        <GradientDiv>
          <p>I hate coding</p>
        </GradientDiv>
      </Container>

      <Container>
        <HorizontalDiv>
          <p>Horizontal Div</p>
          <p>Horizontal Div</p>
        </HorizontalDiv>
      </Container>
    </>
  );
}
