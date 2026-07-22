import { Box, Heading, Image, keyframes, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import colors from '../utils/utils'
// import dp from '../assets/dp3.png'
import ThemeContext from '../context/ThemeContext'
import Aos from 'aos'


const About = () => {

  const {isDark}= useContext(ThemeContext)

const [isLargerThan1200]= useMediaQuery("(min-width: 1200px)")
const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
const [isLargerThan500] = useMediaQuery("(min-width: 500px)")

useEffect(() => {
  Aos.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
}, []);
 

  return (
    <Box bg={isDark?colors.dark.secondary: colors.light.secondary}  minH={'100vh'} pt={'2rem'} display={'flex'} flexDirection={'column'}  alignItems={'center'} >
      {/* <Heading color={'white'}>
      All About Me
      </Heading> */}

                  <Text fontSize={isLargerThan500? '2.6rem': '2.2rem'} color={isDark ? colors.dark.text : colors.light.text} fontWeight={'450'} >All <Text as={'span'} color={colors.primary}>About</Text> Me</Text>


      <Box display={'flex'} flexDirection={isLargerThan1200 ?'row': 'column'} w={isLargerThan1200? '75%': '90%'} justifyContent={'space-between'} mt={'3rem'} alignItems={'center'}>
        <Image  src={'https://static.vecteezy.com/system/resources/previews/011/006/184/original/boy-standing-holding-laptop-with-left-hand-giving-thumbs-up-3d-render-character-illustration-free-png.png'} w={isLargerThan1200?'28rem': '20rem'} position={'relative'} />

        <Box  fontSize={isLargerThan1200? 'xl': isLargerThan500?'lg':'1rem'} color={isDark ? colors.dark.subText : colors.light.subText} w={isLargerThan1200? '47rem': '100%'}  display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
          <Text mb={'1rem'} data-aos="fade-right">
          I'm Yash Gupta, a MERN Stack Developer with over 1 year of professional experience in designing and developing scalable web applications. I specialize in building responsive user interfaces, developing RESTful APIs, and creating efficient full-stack solutions using React.js, Node.js, Express.js, MongoDB, PostgreSQL, and TimescaleDB.
          </Text>

          <Text  mb={'1rem'} data-aos="fade-right">
          Currently, I'm contributing to the development of an IoT-based Fleet Management System, where I work on real-time GPS tracking, vehicle monitoring, and operational dashboards. I have also contributed to enterprise applications in the logistics domain, including Transport Management, E-Lock Management, and Sharanga AI, with a strong focus on performance optimization, clean architecture, and user experience.
          </Text>

          <Text  mb={'1rem'} data-aos="fade-right">
          I enjoy solving complex technical challenges, optimizing application performance, and building scalable software that delivers real business value. I'm passionate about continuously learning new technologies and expanding my expertise in modern backend systems, cloud technologies, and distributed architectures.
          </Text>
        </Box>
        
        

      </Box>
    </Box>
  )
}

export default About