import React, { useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import ThemeContext from '../context/ThemeContext';
import colors from '../utils/utils';

const Loader = () => {
    const { isDark } = useContext(ThemeContext);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 9999,
                backgroundColor: isDark ? colors.dark.primary : colors.light.primary,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box position="relative" display="flex" justifyContent="center" alignItems="center" mb={4} w="100px" h="100px">
                {/* Rotating Ring */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, rotate: 0 }}
                    animate={{ scale: 1.1, opacity: [0, 1, 0], rotate: 180 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: `2px solid ${colors.primary}`,
                        borderTopColor: 'transparent',
                        borderRightColor: 'transparent',
                        borderBottomColor: 'transparent',
                    }}
                />
                
                {/* YG Logo */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                        scale: 1, 
                        opacity: 1, 
                        textShadow: `0px 0px 15px ${colors.primary}80`,
                        color: isDark ? colors.dark.text : colors.light.text
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        fontSize: '3.5rem',
                        fontWeight: '800',
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: '-2px',
                        zIndex: 2,
                    }}
                >
                    YG
                </motion.div>
            </Box>

            {/* Yash Gupta Fade-in */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            >
                <Text fontSize="1.5rem" fontWeight="600" color={isDark ? colors.dark.text : colors.light.text} letterSpacing="1px">
                    Yash Gupta
                </Text>
            </motion.div>

            {/* MERN Stack Developer Typing Effect */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                style={{ height: '24px' }} // Prevent layout shift when typing starts
            >
                <Text fontSize="1.1rem" fontWeight="500" color={colors.primary} mt={1}>
                    <Typewriter
                        words={['MERN Stack Developer']}
                        loop={1}
                        cursor
                        cursorStyle='_'
                        typeSpeed={35}
                    />
                </Text>
            </motion.div>
        </motion.div>
    );
};

export default Loader;
