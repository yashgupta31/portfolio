import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, Icon, Input, Text, useConst, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
// import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import { HashLink } from 'react-router-hash-link'
import { IoFlashlight, IoHomeOutline, IoMenu } from 'react-icons/io5'
import { GiSkills } from 'react-icons/gi'
import { MdOutlineLocalPhone, MdWorkOutline } from 'react-icons/md'
import { FaRegUser } from 'react-icons/fa'
import ThemeContext from '../context/ThemeContext'
import { SiLintcode } from 'react-icons/si'
import { BsLightbulbFill } from 'react-icons/bs'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'
import colors from '../utils/utils'


const Navbar = () => {
  const [active, setActive] = useState('home');
  const [percent, setPercent] = useState(0);

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercent = (scrollPosition / totalHeight) * 100;
      setPercent(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  // --------------Theme------------------------
  const { isDark, setIsDark } = useContext(ThemeContext)
  // useEffect(()=>{
  //   console.log(isDark)
  // },[isDark])
  // ----------------------------------
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
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()


  const [isLargerThan800] = useMediaQuery("(min-width: 800px)")
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)")
  const [isLargerThan450] = useMediaQuery("(min-width: 450px)")



  return (
    // <div style={{position: 'fixed', color: 'white'}}>Navbar</div>
    <>
      {
        isLargerThan700 ? (<Box bg={isDark ? colors.dark.primary : colors.light.secondary} w={'100%'} position={'fixed'} color={'white'} zIndex={99} display={'flex'} flexDirection={'column'} alignItems={'center'} >
          <Box h={'3.9rem'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} w={'100%'} padding={'0rem 2rem'} >
            <Text fontSize={isLargerThan800 ? '1.9rem' : '1.8rem'}>
              <HashLink to="/#home" smooth onClick={() => setActive('home')} style={{ display: 'flex', alignItems: 'center' }}>
                Yash<span style={{ color: 'grey' }}>Gupta</span>
                <Icon as={SiLintcode} color={'red'} />

              </HashLink>
            </Text>

            <Box w={isLargerThan800 ? '34rem' : '27rem'} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} fontSize={'1.2rem'}>
              <HashLink to="/#home" smooth onClick={() => setActive('home')} style={{ color: (active === 'home') ? '#F87C58' : '#839585', borderBottom: (active === 'home') && '2px solid #F87C58' }} >Home</HashLink>
              <HashLink to="/#about" scroll={el => scrollWithOffset(el, 60)} smooth onClick={() => setActive('about')} style={{ color: (active === 'about') ? '#F87C58' : '#839585', borderBottom: (active === 'about') && '2px solid #F87C58' }}>About</HashLink>
              <HashLink to="/#skills" scroll={el => scrollWithOffset(el, 60)} smooth onClick={() => setActive('skills')} style={{ color: (active === 'skills') ? '#F87C58' : '#839585', borderBottom: (active === 'skills') && '2px solid #F87C58' }} >Skills</HashLink>
              <HashLink to="/#projects" scroll={el => scrollWithOffset(el, 60)} smooth onClick={() => setActive('projects')} style={{ color: (active === 'projects') ? '#F87C58' : '#839585', borderBottom: (active === 'projects') && '2px solid #F87C58' }}>Projects</HashLink>
              <HashLink to="/#contact" scroll={el => scrollWithOffset(el, 60)} smooth onClick={() => setActive('contact')} style={{ color: (active === 'contact') ? '#F87C58' : '#839585', borderBottom: (active === 'contact') && '2px solid #F87C58' }}>Contact</HashLink>
              {/* <Text as={'a'} bg={colors.primary} p={'0.3rem 1rem'} borderRadius={'4px'} fontSize={'1.1rem'}>
                Button
              </Text> */}
              <Button onClick={downloadResume} w={'6rem'} shadow={'lg'} position={'relative'} transition={'0.7s'} colorScheme='red' size='md' bg={'#F87C58'}>
                Resume
              </Button>
              {
                isDark ?
                  <Icon color={'yellow'} as={IoMdSunny} onClick={() => setIsDark(!isDark)} name='Light Mode' cursor={'pointer'} fontSize={'1.5rem'} /> :
                  <Icon color={'#282828'} as={IoMdMoon} onClick={() => setIsDark(!isDark)} name='Dark Mode' cursor={'pointer'} fontSize={'1.5rem'} />

              }



            </Box>
          </Box>
          <Box w={'100%'} h={'0.10rem'}>
            <Box bg={'#FF9D00'} w={`${percent}%`} h={'100%'} transition={'0.4s'}></Box>
          </Box>


        </Box>) :

          // ----------------width below 700px------------------
          <Box bg={isDark ? colors.dark.primary : colors.light.secondary} color={'white'} w={'100%'} p={'0rem 1rem'} h={'3.5rem'} position={'fixed'} top={0} zIndex={999} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Text fontSize={'1.5rem'} w={'9rem'}>
              <HashLink to="/#home" smooth onClick={() => setActive('home')} style={{ display: 'flex', alignItems: 'center', color: isDark ? 'white' : '#434242' }}>
                Yash<span style={{ color: 'grey' }}>Gupta</span>
                <Icon as={SiLintcode} color={'red'} />
              </HashLink>
            </Text>


            <Box display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} w={'5rem'}>
              {
                isDark ?
                  <Icon color={'#FFD700'} as={IoMdSunny} onClick={() => setIsDark(!isDark)} name='Light Mode' cursor={'pointer'} fontSize={'1.5rem'} /> :
                  <Icon color={'#282828'} as={IoMdMoon} onClick={() => setIsDark(!isDark)} name='Dark Mode' cursor={'pointer'} fontSize={'1.5rem'} />

              }
              <Icon as={IoMenu} fontSize={'1.8rem'} ref={btnRef} colorScheme='teal' onClick={onOpen} color={'#434242'} />
              {/* <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          
        Open
      </Button> */}
              <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}

              >
                <DrawerOverlay />
                <DrawerContent bg={isDark ? colors.dark.primary : colors.light.secondary} color={isDark ? 'white' : '#282828'} opacity={'94%'}>
                  <DrawerCloseButton fontSize={'1rem'} />
                  <DrawerBody >
                    <Box mt={'1rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} h={'25rem'} fontSize={'1.3rem'} justifyContent={'center'}>
                      <HashLink to="/#home" smooth onClick={() => onClose()} style={{ padding: '0.7rem 0rem' }} >Home</HashLink>
                      <HashLink to="/#about" scroll={el => scrollWithOffset(el, 60)} smooth onClick={() => onClose()} style={{ padding: '0.7rem 0rem' }} >About</HashLink>
                      <HashLink to="/#skills" scroll={el => scrollWithOffset(el, 60)} smooth onClick={() => onClose()} style={{ padding: '0.7rem 0rem' }}  >Skills</HashLink>
                      <HashLink to="/#projects" scroll={el => scrollWithOffset(el, 60)} smooth onClick={() => onClose()} style={{ padding: '0.7rem 0rem' }} >Projects</HashLink>
                      <HashLink to="/#contact" scroll={el => scrollWithOffset(el, 60)} smooth onClick={() => onClose()} style={{ padding: '0.7rem 0rem' }}>Contact</HashLink>

                      <Button onClick={downloadResume} w={'8rem'} mt={'1rem'} shadow={'lg'} position={'relative'} transition={'0.7s'} colorScheme='red' size='md' bg={'#F87C58'}>
                        Resume
                      </Button>

                    </Box>
                  </DrawerBody>

                </DrawerContent>
              </Drawer>
            </Box>

          </Box>



        //   ( <Box bg={'#181818'} boxShadow='md'  position={'fixed'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} zIndex={999} bottom={0} w={'100%'} h={'3.3rem'} fontSize={isLargerThan450?'1.7rem': '1rem'}>
        //     <HashLink to="/#home" smooth onClick={() => setActive('home')} style={{ color: (active === 'home') ? 'red' : '#839585' }}><IoHomeOutline /></HashLink>
        //     <HashLink to="/#skills" smooth onClick={() => setActive('skills')} style={{ color: (active === 'skills') ? 'red' : '#839585' }}><GiSkills /></HashLink>
        //     <HashLink to="/#skills" smooth onClick={() => setActive('skills')} style={{ color: (active === 'skills') ? 'red' : '#839585' }}><GiSkills /></HashLink>

        //     <HashLink to="/#projects" smooth onClick={() => setActive('projects')} style={{ color: (active === 'projects') ? 'red' : '#839585', fontSize: isLargerThan450?'2.2rem': '1.8rem', position: 'relative', bottom: '1.1rem' }}>
        //     <Box bg={'#F87C58'} borderRadius={'50%'} p={'0.6rem'} boxShadow='dark-lg'>
        //     <MdWorkOutline />
        //     </Box>
        //     </HashLink>

        //     <HashLink to="/#contact" smooth onClick={() => setActive('contact')} style={{ color: (active === 'contact') ? 'red' : '#839585' }}><MdOutlineLocalPhone /></HashLink>
        //     <HashLink to="/#contact" smooth onClick={() => setActive('contact')} style={{ color: (active === 'contact') ? 'red' : '#839585' }}><MdOutlineLocalPhone /></HashLink>
        //     <HashLink to="/#about" smooth onClick={() => setActive('about')} style={{ color: (active === 'about') ? 'red' : '#839585' }}><FaRegUser /></HashLink>

        // </Box>)
      }

      {/* <Icon className='torch' color={isDark?'white': 'black'} as={IoFlashlight} onClick={()=> setIsDark(!isDark)} name='Torch' /> */}

    </>
  )
}

export default Navbar


{/* <HashLink to="/#about" smooth offset={-70} onClick={() => setActive('about')} style={{ color: (active === 'about') ? 'red' : 'white' }}>About</HashLink> */ }

{/* <Link to="home" smooth={true} duration={500} onClick={()=> setActive('home')} style={{color: (active== 'home')?'red': 'white'}}>Home</Link>
      <Link to="about" smooth={true} duration={500} onClick={()=> setActive('about')} style={{color: (active== 'about')?'red': 'white'}}>About</Link>
      <p>Skills</p>
      <p>Projects</p>
      <p>Contact</p> */}