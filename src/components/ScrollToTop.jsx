import React, { useState, useEffect, useContext } from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import ThemeContext from '../context/ThemeContext';
import colors from '../utils/utils';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { isDark } = useContext(ThemeContext);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <Box
                    onClick={scrollToTop}
                    position='fixed'
                    bottom='2rem'
                    right='2rem'
                    zIndex={999}
                    cursor='pointer'
                    bg={isDark ? colors.dark.fourth : 'white'}
                    color={colors.primary}
                    p='0.7rem'
                    borderRadius='50%'
                    boxShadow={isDark ? 'rgba(0, 0, 0, 0.45) 0px 5px 15px' : 'rgba(0, 0, 0, 0.15) 0px 5px 15px'}
                    transition='0.3s'
                    _hover={{ transform: 'scale(1.1)', bg: colors.primary, color: 'white' }}
                >
                    <FaArrowUp size="1.2rem" />
                </Box>
            )}
        </>
    );
}

export default ScrollToTop;
