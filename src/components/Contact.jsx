import { Box, Button, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import GmailForm from './GmailForm';
import ThemeContext from '../context/ThemeContext';
import colors from '../utils/utils';
import Aos from 'aos';

const Contact = () => {

    const handleWhatsapp=()=>{
        const myNumber='9527267375';
        const message = 'Hello, I would like to get in touch with you!';
        const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank')
    }

    const [number, setNumber]= useState('9527267375')
    const [mail, setMail]= useState('yashsantoshgupta2019@gmail.com')
    const [isNumCopy, setIsNumCopy]= useState(false)
    const [isMailCopy, setIsMailCopy]= useState(false)
    const [showGmailForm, setShowGmailForm]= useState(false)

    const handleCopyNumber=()=>{
        navigator.clipboard.writeText(number)
        .then(() => {
          setIsNumCopy(true)
          setTimeout(()=>{
            setIsNumCopy(false)
          }, [1000])
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    }

    const handleCopyMail=()=>{
        navigator.clipboard.writeText(mail)
        .then(() => {
          setIsMailCopy(true)
          setTimeout(()=>{
            setIsMailCopy(false)
          }, [1000])
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    }

    useEffect(() => {
      Aos.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

    // -----------------Resume Download & open in new tab---------------------
  const downloadResume = () => {
    // Open in a new tab
    window.open('/resume.pdf', '_blank');
    // Trigger download
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500); // Adjust the timeout as necessary
  };
  // ---------------------------------------------------------

    const {isDark}= useContext(ThemeContext)

      const [isLargerThan1100] = useMediaQuery("(min-width: 1100px)")
      const [isLargerThan600] = useMediaQuery("(min-width: 600px)")
      const [isLargerThan500] = useMediaQuery("(min-width: 500px)")

    return (
        <Box bg={isDark?'#282828': colors.light.third} minH={'91vh'} pt={'2rem'} pb={'5rem'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Text fontSize={isLargerThan500? '2.6rem': '2.2rem'} color={isDark? 'white': '#434242'} fontWeight={'450'} >Let's <Text as={'span'} color={colors.primary}>Connect</Text></Text>
            {/* <Text fontSize={isLargerThan500? '2.6rem': '2.2rem'} color={isDark? 'white': '#434242'} fontWeight={'450'} >My <Text as={'span'} color={colors.primary}>Projects</Text></Text> */}

            <Box  w={'90%'} display={'flex'} flexDirection={isLargerThan1100? 'row': 'column'} alignItems={'center'} justifyContent={'space-evenly'}>
            <Image w={'25rem'} src='https://static.vecteezy.com/system/resources/previews/011/381/958/original/business-people-shaking-hands-finishing-up-a-meeting-3d-character-illustration-png.png' />
           
            <Box w={isLargerThan600?'35rem': '94%'} h={'21rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}>
               
                <Box h={'15rem'} w={'45%'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
                <Button data-aos='fade-right'  bg={isDark?colors.dark.primary: '#929292'} color={isDark?'white':'#282828'} transition={'0.4s'} _hover={{bg: '#F87C58'}} onClick={() => window.open('https://www.linkedin.com/in/yash-gupta-196758281/', '_blank')}>Linkdin</Button>
                <Button data-aos='fade-right'  bg={isDark?colors.dark.primary: '#929292'} color={isDark?'white':'#282828'} transition={'0.4s'} _hover={{bg: '#F87C58'}}  onClick={()=> setShowGmailForm(true)}>Mail</Button>
                <Button data-aos='fade-right'  bg={isDark?colors.dark.primary: '#929292'} color={isDark?'white':'#282828'} transition={'0.4s'} _hover={{bg: '#F87C58'}}  onClick={()=> window.open('https://github.com/yashgupta31', '_blank')}>Github</Button>
                <Button data-aos='fade-right'  bg={isDark?colors.dark.primary: '#929292'} color={isDark?'white':'#282828'} transition={'0.4s'} _hover={{bg: '#F87C58'}}  onClick={handleWhatsapp}>Whatsapp</Button>
                <Button data-aos='fade-right'  as={'a'} onClick={downloadResume} bg={isDark?colors.dark.primary: '#929292'} color={isDark?'white':'#282828'} transition={'0.4s'} _hover={{bg: '#F87C58'}} >Resume</Button>
                </Box>


                <Box display={'flex'} flexDirection={isLargerThan600?'row': 'column'} w={isLargerThan600?'36rem': '100%'} h={!isLargerThan600 && '7rem'} mt={'1rem'} justifyContent={'space-between'}>
                <Box  color={'white'} border={'1px solid #F87C58'} borderRadius={'8px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Text color={isDark? 'white': '#434242'} ml={isLargerThan600? '1rem': '0.2rem'} mr={isLargerThan600? '1rem': '0.2rem'} fontSize={!isLargerThan600 && 'sm'}>9527267375 </Text>
                    <Button bg={'#F87C58'} onClick={handleCopyNumber}>{isNumCopy? 'Copied': 'Copy'}</Button>
                </Box>

                <Box color={'white'} fontSize={!isLargerThan600 && 'sm'} border={'1px solid #F87C58'} borderRadius={'8px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Text color={isDark? 'white': '#434242'} ml={isLargerThan600? '1rem': '0.2rem'} mr={isLargerThan600? '1rem': '0.2rem'} fontSize={!isLargerThan600 && 'sm'} >yashsantoshgupta2019@gmail.com</Text>
                    <Button bg={'#F87C58'} onClick={handleCopyMail} _active={{ bg: "#F87C58" }}>{isMailCopy? 'Copied': 'Copy'}</Button>
                </Box>
                </Box>
                
            </Box>
            
            </Box>
            <Text color={isDark?'lightgrey':'#282828'} position={'absolute'} bottom={'1rem'} fontSize={'0.8rem'} textAlign={'center'}>Developed and designed by Yash Gupta | Thanks For Visit</Text>

            {
                showGmailForm && (<GmailForm setShowGmailForm={setShowGmailForm} />)
            }

        </Box>
    )
}

export default Contact


// https://static.vecteezy.com/system/resources/previews/010/872/510/original/3d-business-partner-shaking-hands-illustration-png.png