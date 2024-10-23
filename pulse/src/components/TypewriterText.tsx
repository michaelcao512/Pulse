import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

const Typewriter = ({ textArray = [] }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const text = textArray[textIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            if (text && charIndex < text.length) {
                setCharIndex(charIndex + 1);
            } else {
                setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
                setCharIndex(0);
            }
        }, 200); // Adjust the typing speed (larger number for slower typing)

        return () => clearInterval(interval);
    }, [textIndex, charIndex, textArray]);

    return (
        <Typography variant="body1">
            {text.substring(0, charIndex)}
            {text && charIndex < text.length && <span style={{ borderRight: '1px solid black' }}></span>}
        </Typography>
    );
};

export default Typewriter;