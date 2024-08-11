import { Box, Heading, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../context/ThemeContext'
import colors from '../utils/utils'
import Aos from 'aos'
import 'aos/dist/aos.css';

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
                    <img src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png" width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Html
                    </Box>
                </Box>

                {/* css */}
                <Box bg={'white'} data-aos="fade-up"  className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src="https://benjaminfevrat.com/pictures/technos_logo/css_logo.png" width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Css
                    </Box>
                </Box>
                {/* </Box> */}
                {/* javascript */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'}  position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src="https://tse1.mm.bing.net/th?id=OIP.eQRqVTzi6ep_wZku3iDmEAHaIZ&pid=Api&P=0&h=220" width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        javascript
                    </Box>
                </Box>
                {/* react */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src="https://www.pngkit.com/png/full/80-804117_javascript-logo-png.png" width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        React
                    </Box>
                </Box>
                {/* redux */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src="https://cdn-images-1.medium.com/max/1200/1*WcRnU2ERqYHZBKBQ0zXCvg.png" width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Redux
                    </Box>
                </Box>
                {/* chakra ui */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src="https://www.coffeeclass.io/logos/chakra-ui.png" width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        ChakraUI
                    </Box>
                </Box>
                {/* nodejs */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png" width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        NodeJs
                    </Box>
                </Box>
                {/* expressjs */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src="https://programador-jr.vercel.app/assets/images/expressjs.png" width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Express
                    </Box>
                </Box>
                {/* mongoose */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src="https://4008838.fs1.hubspotusercontent-na1.net/hubfs/4008838/mogoose-logo.png" width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Mongoose
                    </Box>
                </Box>
                {/* mongodb */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/mongodb_logo_icon_170943.png" width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        MongoDB
                    </Box>
                </Box>

                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png" width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Css
                    </Box>
                </Box>
                {/* thunder client */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src="https://rangav.gallerycdn.vsassets.io/extensions/rangav/vscode-thunder-client/1.3.0/1621339770343/Microsoft.VisualStudio.Services.Icons.Default" width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Css
                    </Box>
                </Box>
                {/* react-router */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src="https://static-00.iconduck.com/assets.00/react-router-icon-512x279-zswz065s.png" width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Css
                    </Box>
                </Box>
                {/* github */}
                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src="https://icon-library.com/images/github-icon-white/github-icon-white-0.jpg" width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Css
                    </Box>
                </Box>

                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png" width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Css
                    </Box>
                </Box>

                <Box bg={'white'} data-aos="fade-up" className='skill-container' w={'6.5rem'} h={'7.5rem'} position={'relative'}  display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'8px'} transition={'0.5s'} _hover={{ boxShadow: 'black 0px 3px 8px;', cursor: 'pointer', bg: '#F87C58' }}>
                    <img src="https://logos-download.com/wp-content/uploads/2017/07/HTML5_badge.png" width={'80%'} />
                    <Box className='skill-name' position={'absolute'} borderRadius={'8px'}>
                        Css
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Skills


