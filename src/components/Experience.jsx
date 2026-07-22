import { Box, Heading, Text, useMediaQuery, UnorderedList, ListItem } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import ThemeContext from '../context/ThemeContext'
import colors from '../utils/utils'
import Aos from 'aos'
import 'aos/dist/aos.css';

const Experience = () => {
    const { isDark } = useContext(ThemeContext)
    const [isLargerThan500] = useMediaQuery("(min-width: 500px)")
    const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <Box bg={isDark ? colors.dark.secondary : colors.light.secondary} minH={'80vh'} pt={'2rem'} pb={'4rem'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Text fontSize={isLargerThan500 ? '2.6rem' : '2.2rem'} color={isDark ? colors.dark.text : colors.light.text} fontWeight={'450'}>
                Professional <Text as={'span'} color={colors.primary}>Experience</Text>
            </Text>

            <Box w={isLargerThan1200 ? '60%' : '90%'} mt={'3rem'} display={'flex'} flexDirection={'column'} gap={'2rem'}>
                <Box data-aos="fade-up" bg={isDark ? colors.dark.fourth : colors.light.fourth} p={isLargerThan500 ? '2.5rem' : '1.5rem'} borderRadius={'14px'} boxShadow={isDark ? 'rgba(0, 0, 0, 0.35) 0px 5px 15px' : 'rgba(0, 0, 0, 0.35) 0px 2px 10px'} transition={'0.3s'}>
                    <Box display={'flex'} flexDirection={isLargerThan500 ? 'row' : 'column'} justifyContent={'space-between'} alignItems={isLargerThan500 ? 'center' : 'flex-start'} mb={'1.5rem'}>
                        <Box>
                            <Heading size={'md'} color={isDark ? colors.dark.text : colors.light.text}>MERN Stack Developer (Intern → Full-time)</Heading>
                            <Text fontSize={'1.1rem'} color={colors.primary} fontWeight={'600'} mt={'0.4rem'}>Alluvium IoT Solutions Pvt. Ltd.</Text>
                        </Box>
                        <Text color={isDark ? colors.dark.subText : colors.light.subText} fontWeight={'500'} mt={isLargerThan500 ? '0' : '0.5rem'} bg={isDark ? 'blackAlpha.400' : 'gray.100'} px={'1rem'} py={'0.3rem'} borderRadius={'20px'}>
                            March 2025 – Present
                        </Text>
                    </Box>

                    <UnorderedList color={isDark ? colors.dark.subText : colors.light.subText} spacing={3} ml={'1.2rem'} fontSize={isLargerThan500 ? '1.1rem' : '1rem'}>
                        <ListItem>Joined as a <Text as='span' fontWeight='bold' color={colors.primary}>MERN Stack Developer Intern</Text> and transitioned to a <Text as='span' fontWeight='bold' color={colors.primary}>full-time MERN Stack Developer</Text> after successfully completing a 3-month internship.</ListItem>
                        <ListItem>Developed and maintained enterprise web applications using <Text as='span' fontWeight='bold'>React.js, Node.js, Express.js, MongoDB, and PostgreSQL</Text>.</ListItem>
                        <ListItem>Built responsive and reusable user interfaces using <Text as='span' fontWeight='bold'>React.js</Text> and <Text as='span' fontWeight='bold'>Material UI</Text>, improving application usability and maintainability.</ListItem>
                        <ListItem>Designed and integrated RESTful APIs to enable seamless communication between frontend and backend services.</ListItem>
                        <ListItem>Contributing to the development of an <Text as='span' fontWeight='bold'>IoT-based Fleet Management System</Text>, building features for <Text as='span' fontWeight='bold'>real-time GPS tracking</Text>, vehicle monitoring, and operational dashboards using <Text as='span' fontWeight='bold'>React.js, Node.js, PostgreSQL, and TimescaleDB</Text>.</ListItem>
                        <ListItem>Worked on logistics and transportation management modules by implementing new features, resolving production issues, and optimizing application performance.</ListItem>
                        <ListItem>Collaborated with cross-functional teams in an Agile environment, participating in requirement analysis, development, testing, deployment, and maintenance.</ListItem>
                        <ListItem>Utilized <Text as='span' fontWeight='bold'>Git</Text>, <Text as='span' fontWeight='bold'>GitHub</Text>, and <Text as='span' fontWeight='bold'>Postman</Text> for version control, API testing, debugging, and collaborative software development.</ListItem>
                    </UnorderedList>
                </Box>
            </Box>
        </Box>
    )
}

export default Experience
