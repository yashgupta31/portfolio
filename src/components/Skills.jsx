import { Box, Heading, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../context/ThemeContext'
import colors from '../utils/utils'
import Aos from 'aos'
import 'aos/dist/aos.css';

import html from '../assets/skill-icons/html.png'
import css from '../assets/skill-icons/css.png'
import javascript from '../assets/skill-icons/javascript.png'
import react from '../assets/skill-icons/react.png'
import redux from '../assets/skill-icons/redux.png'
import chakraUI from '../assets/skill-icons/chakra-ui.png'
import nodejs from '../assets/skill-icons/nodejs.png'
import expressjs from '../assets/skill-icons/expressjs.png'
import mongoose from '../assets/skill-icons/mongoose.webp'
import mongodb from '../assets/skill-icons/mongodb.webp'
import vite from '../assets/skill-icons/vite.png'
import github from '../assets/skill-icons/github.png'
import python from '../assets/skill-icons/python.webp'
import postman from '../assets/skill-icons/postman.png'
import vercel from '../assets/skill-icons/vercel.png'
import git from '../assets/skill-icons/git.png'





const Skills = () => {
    const { isDark, setIsDark } = useContext(ThemeContext)
    const [isLargerThan500] = useMediaQuery("(min-width: 500px)")

    useEffect(() => {
        Aos.init({ duration: 1400 }); // Initialize AOS with a duration of 1000ms
      }, []);

    return (
        <Box minH={'95vh'} bg={isDark?colors.dark.third: colors.light.third} pt={'1.6rem'} pb={'1rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} textAlign={'center'}>
            {/* <Heading color={'white'} pt={'1.4rem'} w={'70%'} mt={'2rem'}>My Technical Skills</Heading> */}
            <Text fontSize={isLargerThan500 ? '2.6rem' : '2.2rem'} color={isDark? 'white': '#434242'} fontWeight={'450'} ><Text as={'span'} color={colors.primary}>Skills</Text> & Tools</Text>

            <Box w={isLargerThan500?'77%': '90%'} display={'flex'} flexWrap={'wrap'} justifyContent={'center'} mt={'4rem'} gap={10} >
                {/* html */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src={html} width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Html
                    </Box>
                </Box>

                {/* css */}
                <Box bg={'white'} data-aos="fade-up"  className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src={css} width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Css
                    </Box>
                </Box>
                {/* </Box> */}
                {/* javascript */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'}  position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src={javascript} width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        javascript
                    </Box>
                </Box>
                {/* react */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src={react} width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        React
                    </Box>
                </Box>
                {/* redux */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src={redux} width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Redux
                    </Box>
                </Box>
                {/* chakra ui */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src={chakraUI} width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        ChakraUI
                    </Box>
                </Box>
                {/* nodejs */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src={nodejs} width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        NodeJs
                    </Box>
                </Box>
                {/* expressjs */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src={expressjs} width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Express
                    </Box>
                </Box>
                {/* mongoose */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src={mongoose} width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Mongoose
                    </Box>
                </Box>
                {/* mongodb */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src={mongodb} width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        MongoDB
                    </Box>
                </Box>

                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src={vite} width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Vite
                    </Box>
                </Box>
                {/* thunder client */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src={github} width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        GitHub
                    </Box>
                </Box>
                {/* react-router */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src={python} width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Python
                    </Box>
                </Box>
                {/* github */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src={postman} width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Postman
                    </Box>
                </Box>

                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src={vercel} width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        vercel
                    </Box>
                </Box>

                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src={git} width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Git
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Skills


