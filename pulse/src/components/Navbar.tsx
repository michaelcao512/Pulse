"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from '@/logo.png';
import {
    GlobalStyle,
    Nav,
    Logo,
    Links,
    StyledLink,
    Hamburger,
    MobileMenu,
    GradientButton
} from "@/Styles/GeneralStyles";

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isScrollingUp = prevScrollPos > currentScrollPos;

        setVisible(isScrollingUp || currentScrollPos < 10);  // Navbar visible if scrolling up or near the top
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <>
            <GlobalStyle />
            <Nav style={{ top: visible ? "0" : "-80px", transition: "top 0.3s" }}>
                <Logo>
                    <a href="#home">
                        <Image src={logo} alt="Logo" width={110} height={30} />
                    </a>
                    <StyledLink href="#link1">Home</StyledLink>
                    <StyledLink href="#link2">About</StyledLink>
                    <StyledLink href="#link3">Contact</StyledLink>
                </Logo>

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
        </>
    );
};

export default Navbar;
