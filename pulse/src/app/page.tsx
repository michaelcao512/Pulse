"use client";
import Image from "next/image";
import { GlobalStyle, Container, HeroSection, GradientButton, SlideshowSection } from "@/Styles/GeneralStyles";
import TypewriterText from "@/components/TypewriterText";
import Typewriter from 'react-ts-typewriter';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <HeroSection>
          <h1>Welcome to Pulse</h1>
          <h2>
            <Typewriter text='the beginning of your user research journey' />
          </h2>
          <GradientButton href="#learn-more">Learn More</GradientButton>
        </HeroSection>

        <SlideshowSection>
          <h2>Explore Our Features</h2>
          <div className="slideshow-container">
            <div className="slideshow-content">
              <div>Feature 1</div>
              <div>Feature 2</div>
              <div>Feature 3</div>
            </div>
          </div>
        </SlideshowSection>
      </Container>
    </>
  );
}
