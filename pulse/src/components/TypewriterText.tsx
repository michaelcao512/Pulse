"use client";
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Keyframes for typing and deleting
const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const deleting = keyframes`
  from { width: 100%; }
  to { width: 0; }
`;

// Styled text for the typewriter effect
const TypewriterWrapper = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid black;
  font-size: inherit;
  animation: ${({ isTyping }) => (isTyping ? typing : deleting)} 1.5s steps(20) forwards;
`;

const TypewriterText = () => {
    const words = ["user research", "product testing", "market research", "user understanding"];
    const [textIndex, setTextIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsTyping(!isTyping);
            if (!isTyping) setTextIndex((prev) => (prev + 1) % words.length);
        }, isTyping ? 2000 : 1000);
        return () => clearTimeout(timeout);
    }, [isTyping]);

    return <TypewriterWrapper isTyping={isTyping}>{words[textIndex]}</TypewriterWrapper>;
};

export default TypewriterText;
