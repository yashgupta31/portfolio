import { Box, Heading, Image, keyframes, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import colors from '../utils/utils'
// import dp from '../assets/dp3.png'
import ThemeContext from '../context/ThemeContext'


const About = () => {

  const {isDark}= useContext(ThemeContext)

const [isLargerThan1200]= useMediaQuery("(min-width: 1200px)")
const [isLargerThan768] = useMediaQuery("(min-width: 768px)")
const [isLargerThan500] = useMediaQuery("(min-width: 500px)")

  return (
    <Box bg={isDark?colors.dark.secondary: colors.light.secondary}  minH={'100vh'} pt={'2rem'} display={'flex'} flexDirection={'column'}  alignItems={'center'} >
      {/* <Heading color={'white'}>
      All About Me
      </Heading> */}

                  <Text fontSize={isLargerThan500? '2.6rem': '2.2rem'} color={isDark? 'white': '#434242'} fontWeight={'450'} >All <Text as={'span'} color={colors.primary}>About</Text> Me</Text>


      <Box display={'flex'} flexDirection={isLargerThan1200 ?'row': 'column'} w={isLargerThan1200? '75%': '90%'} justifyContent={'space-between'} mt={'3rem'} alignItems={'center'}>
        <Image  src={'https://static.vecteezy.com/system/resources/previews/011/006/184/original/boy-standing-holding-laptop-with-left-hand-giving-thumbs-up-3d-render-character-illustration-free-png.png'} w={isLargerThan1200?'28rem': '20rem'} position={'relative'} />

        <Box  fontSize={isLargerThan1200? 'xl': isLargerThan500?'lg':'1rem'} color={isDark?'white': colors.dark.primary} w={isLargerThan1200? '47rem': '100%'}  display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
          <Text mb={'1rem'}>
          Hello! My name is Yash Gupta, and I am a web developer who loves coding and creating eye-pleasing websites. I am highly adaptable, enjoy tackling challenges, and am always eager to learn new technologies.
          </Text>

          <Text  mb={'1rem'} >
          I am proficient in JavaScript and experienced in the MERN stack (MongoDB, Express.js, React.js, Node.js). My skills include designing RESTful APIs, working with HTML and CSS, and managing MongoDB databases. I focus on writing efficient, maintainable code.
          </Text>

          <Text  mb={'1rem'}>
          I thrive in collaborative environments and enjoy working with others to achieve common goals. As a team player with positive vibes and good communication skills, I bring problem-solving abilities and a commitment to high-quality solutions to every project.
          </Text>
        </Box>
        
        

      </Box>
    </Box>
  )
}

export default About