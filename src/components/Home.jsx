import React, { useContext, useEffect, useState } from 'react'
import dp from '../assets/dp4.png'
import { Box, Heading, Text, Button, useMediaQuery, keyframes, space, Image, Link } from '@chakra-ui/react';

import { CiLinkedin } from "react-icons/ci";
import { FaArrowDown, FaGithub } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import { Typewriter } from 'react-simple-typewriter';
import ThemeContext from '../context/ThemeContext';
import colors from '../utils/utils'
// const moveAnimation = keyframes`
//   0%, 100% { transform: translateX(0); }
//   50% { transform: translateX(100%); }
// `;

// const moveAnimation = keyframes`
//   0%, 100% { transform: translateX(0); }
//   50% { transform: translateX(calc(100% - 2rem)); }
// `;

// const moveAnimation = keyframes`
//   0% { transform: translateX(0); }
//   50% { transform: translateX(calc(100% - 2rem)); }
//   100% { transform: translateX(0); }
// `;

const moveAnimation = keyframes`
  0%, 100% { justify-content: start; }
  50% { justify-content: end; }
`;

const Home = () => {
  const [flag1, setFlag1] = useState(false)
  const [flag2, setFlag2] = useState(false)
  const [flag3, setFlag3] = useState(false)
  const [flag4, setFlag4] = useState(false)
  const [flag5, setFlag5] = useState(false)
  const [flag6, setFlag6]= useState(false)

  // const [dynamic, setDynamic]= useState()

  // useEffect(() => {
  //   let name = 'FULL STACK ';
  //   let bag = '';
  //   let timeOuts = [];

  //   for (let i = 0; i < name.length; i++) {
  //     let timeOut = setTimeout(() => {
  //       bag += name[i];
  //       setDynamic(bag);
  //     }, 500 * i);
  //     timeOuts.push(timeOut);
  //   }

  //   return () => {
  //     timeOuts.forEach(clearTimeout);
  //   };
  // }, []);

  //     const rotate360 = keyframes`
  // 0% { transform: rotate(0deg); }
  // 100% { transform: rotate(360deg); }
  // `;

  

  setTimeout(() => {
    setFlag1(true)
  }, 700)

  setTimeout(() => {
    setFlag2(true);
  }, 850)

  setTimeout(() => {
    setFlag3(true)
  }, 1000)

  setTimeout(() => {
    setFlag4(true)
  }, 1050)


  useEffect(() => {
    let intervalId = setInterval(() => {
      setFlag5(!flag5)
    }, 1000)
    return () => {
      clearInterval(intervalId)
    }
  }, [flag5])

  useEffect(() => {
    let intervalId = setInterval(() => {
      setFlag6(!flag6)
    }, 1500)
    return () => {
      clearInterval(intervalId)
    }
  }, [flag6])


  // ------------------Bubble transition----------------------

  // const [justifyContent, setJustifyContent] = useState('start');

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setJustifyContent(prev => (prev === 'start' ? 'end' : 'start'));
  //   }, 2000);

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);
// -------------------
  // const [moveRight, setMoveRight] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setMoveRight(prev => !prev);
  //   }, 1000);

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);
  // --------------------------

  const handleResumeDownload = () => {
    // Create an anchor element
    const url = '/resume.pdf';
const link = document.createElement('a');
link.href = url;
link.download = 'resume.pdf';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
  };

  const words = [
    "FULL STACK WEB DEVELOPER",
    "FRONTEND DEVELOPER",
    "CONTINUOUS LEARNER..",
    "CREATIVE PROGRAMMER"
  ];
  // -----------theme--------------
  const {isDark}= useContext(ThemeContext)

  const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)")
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)")
  const [isLargerThan500] = useMediaQuery("(min-width: 500px)")
  const [isLargerThan450] = useMediaQuery("(min-width: 450px)")
  const [isLargerThan360] = useMediaQuery("(min-width: 360px)")

  return (
    <Box h={'100vh'} pt={isLargerThan700?'0rem':'9rem'} bg={isDark? colors.dark.primary: colors.light.primary} display={'flex'} flexDirection={isLargerThan1000 ? 'row' : 'column'} justifyContent={'center'} alignItems={'center'} position={'relative'}>
      <Box position={'absolute'} color={isDark?'white': colors.dark.primary} left={isLargerThan700 && '4rem'} right={!isLargerThan700 && '3rem'} bottom={isLargerThan700?'3rem': '5rem'} display={'flex'} flexDirection={'column'} h={isLargerThan700?'7rem': '5.5rem'} justifyContent={'space-between'} alignItems={'center'} fontSize={isLargerThan700?'1.9rem': '1.3rem'} opacity={flag3 ? '100%' : '0%'} transition={'0.7s'}>
        <CiLinkedin style={{ transform: flag3 ? 'none' : 'Rotate(-135deg)', transition: '0.7s' }} />
        <FaGithub style={{ transform: flag3 ? 'none' : 'Rotate(135deg)', transition: '0.7s' }} />
        <CgMail style={{ transform: flag3 ? 'none' : 'Rotate(135deg)', transition: '0.7s' }} />

      </Box>
      {
        isLargerThan1000 ? (<><Box h={'13rem'} color={isDark?'white': colors.dark.primary} w={'30rem'} mr={'7rem'} display={'flex'} position={'relative'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'start'}>
          <Heading as='h4' size='md' position={'relative'} opacity={flag1 ? '100%' : '0%'} left={flag1 ? '0rem' : '-5rem'} transition={'0.7s'}>Hello, my name is </Heading>
          <Heading as='h2' size='2xl' position={'relative'} opacity={flag2 ? '100%' : '0%'} left={flag2 ? '0rem' : '-5rem'} transition={'0.7s'} >Yash Gupta</Heading>
          <Text as={'span'} fontSize={'2rem'} position={'relative'} opacity={flag3 ? '100%' : '0%'} left={flag3 ? '0rem' : '-5rem'} transition={'0.7s'}>{`I'm a `} 
            <span style={{ color: '#F87C58' }}>
            <Typewriter
          words={words}
          loop={0} // Infinite loop
          cursor
          cursorStyle='|'
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={1000}
        /></span></Text>
          {/* <Button w={'12rem'} shadow={'lg'} position={'relative'} opacity={flag4 ? '100%' : '0%'} left={flag4 ? '0rem' : '-5rem'} transition={'0.7s'} colorScheme='red' size='md' bg={'#F87C58'}>
            Resume
          </Button> */}
          <Link
  href="/resume.pdf"
  download="resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  w="12rem"
  shadow="lg"
  position="relative"
  opacity={flag4 ? '100%' : '0%'}
  left={flag4 ? '0rem' : '-5rem'}
  transition="0.7s"
  bg="#F87C58"
  color="white"
  textAlign="center"
  p="0.5rem 1rem"
  textDecoration="none"
  borderRadius="4px"
  display="inline-block"
>
  -Resume-
</Link>

        </Box>
      

          <Box position="relative" bg={'#F87C58'} mr={'4rem'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'50%'}  h={'21rem'} w={'21rem'} boxShadow={'xl'}>
      
        <Box bg={'#F87C58'} position={'absolute'} w={'103%'} h={'100%'} transition={'1.5s'} borderRadius={'100%'} transform={flag6?'rotate(0deg)': 'rotate(400deg)'} ></Box>
            <img src={dp} alt="" style={{ height: '100%', width: '100%', filter: 'grayscale(40%)', borderRadius: '50%' }} />
          </Box></>) : 
          // -----------less than 1000px----------
          (<Box display={'flex'}  flexDirection={'column'} alignItems={'center'}>
            <Box position="relative" h={isLargerThan360?'14rem': '11rem'} w={isLargerThan360?'14rem': '11rem'} mt={isLargerThan700? '0rem': '-8rem'} bg={'#F87C58'} borderRadius={'50%'}  display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Box bg={'#F87C58'} zIndex={1}  position='absolute' w={'103%'} h={'100%'} transition={'1.5s'} borderRadius={'50%'}  transform={flag6?'rotate(0deg)': 'rotate(500deg)'}></Box>

            <Image src={dp} zIndex={2} alt='profile-pic' h={'100%'} w={'100%'}  borderRadius={'50%'}  />
          </Box>

            <Box h={isLargerThan700? '13rem': isLargerThan450?'12rem': '13rem'} w={isLargerThan500 ? '30rem': isLargerThan450? '25rem': '16.7rem'} m={'1rem'} fontSize={'0.2rem'} mt={'1rem'}  color={isDark?'white': colors.dark.primary} display={'flex'} position={'relative'} flexDirection={'column'} justifyContent={'space-between'} alignItems={'start'}>
              <Heading as='h4' size='md' position={'relative'} opacity={flag1 ? '100%' : '0%'} left={flag1 ? '0rem' : '-5rem'} transition={'0.7s'} mb={'-0.5rem'}>Hello, my name is </Heading>
              <Heading as='h3' size='2xl' position={'relative'} opacity={flag2 ? '100%' : '0%'} left={flag2 ? '0rem' : '-5rem'} transition={'0.7s'} >Yash Gupta</Heading>
              <Heading as='h3' fontSize={isLargerThan500? '1.7rem': '1.3rem'} size='lg' position={'relative'} opacity={flag3 ? '100%' : '0%'} left={flag3 ? '0rem' : '-5rem'} transition={'0.7s'}>{`I'm a `} 
                <span style={{ color: '#F87C58' }}>
              <Typewriter
          words={words}
          loop={0} // Infinite loop
          cursor
          cursorStyle='|'
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={1000}
        /></span>
        </Heading>
              <Button onClick={handleResumeDownload} w={'12rem'} shadow={'lg'} position={'relative'} opacity={flag4 ? '100%' : '0%'} left={flag4 ? '0rem' : '-5rem'} transition={'0.7s'} colorScheme='red' size='md' bg={'#F87C58'}>
                Resume
              </Button>

            </Box>
          </Box>)
      }

      {
        isLargerThan700 && <FaArrowDown style={{ position: 'absolute', color: isDark? 'white': colors.dark.primary, right: '8rem', bottom: flag5 ? '5rem' : '3rem', transition: '1s', fontSize: '1.6rem' }} />

      }

    </Box>
  )
}

export default Home