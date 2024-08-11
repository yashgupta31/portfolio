import { Box, Heading, Image, Text, Button, useMediaQuery } from '@chakra-ui/react'
import { wrap } from 'framer-motion'
import React, { useContext, useEffect, useState } from 'react'
import ThemeContext from '../context/ThemeContext'
import colors from '../utils/utils'
// import { Button } from 'react-scroll'
//Asos
import asos1 from '../assets/Projects/asos1.png'
import asos2 from '../assets/Projects/asos2.png'
import asos3 from '../assets/Projects/asos3.png'
import asos4 from '../assets/Projects/asos4.png'
import asos5 from '../assets/Projects/asos5.png'
// Medicare
import medicare1 from '../assets/Projects/medicare1.png'
import medicare2 from '../assets/Projects/medicare2.png'
import medicare3 from '../assets/Projects/medicare3.png'
import medicare4 from '../assets/Projects/medicare4.png'
import medicare5 from '../assets/Projects/medicare5.png'
// Todo
import todo1 from '../assets/Projects/todo1.png'
import todo2 from '../assets/Projects/todo2.png'
import todo3 from '../assets/Projects/todo3.png'
import todo4 from '../assets/Projects/todo4.png'
import todo5 from '../assets/Projects/todo5.png'
//Quiz
import quiz1 from '../assets/Projects/quiz1.png'
import quiz2 from '../assets/Projects/quiz2.png'
import quiz3 from '../assets/Projects/quiz3.png'
import quiz4 from '../assets/Projects/quiz4.png'
import Aos from 'aos'



const Projects = () => {



    const data = [
        {
            img: [asos1,asos2, asos3, asos4, asos5],
            name: 'Asos',
            description: 'ASOS Clone is a responsive e-commerce site inspired by ASOS, offering features like filtering, sorting, and cart management for a streamlined shopping experience.',
            teck: 'Javascript | Html | Css | Json Server',
            live: `https://asos-react.netlify.app/`,
            github: `https://github.com/yashgupta31/asos`
        },

        {
            img: [medicare1,medicare2 ,medicare3, medicare4, medicare5],
            name: 'YG-Medicare',
            description: 'YG-Medicare is an e-commerce site for medical products, inspired by PharmEasy, designed to simplify the shopping experience for health-related needs.',
            teck: 'Javascript | Html | Css | Json Server',
            live: `https://yg-medicare.netlify.app/`,
            github: `https://github.com/yashgupta31/yg-medicare`
        },
        {
            img: [todo1, todo2, todo3, todo4, todo5],
            name: 'Todos Keeper',
            description: 'Todos Keeper is a to-do list app that enables users to manage tasks, filter by status, and track completion percentages, all in a responsive design.',
            teck: 'ReactJs | Redux | Javascript | ChakraUI | Html | Css',
            live: `https://todoskeeper.netlify.app/`,
            github: `https://github.com/yashgupta31/todoskeeper`
        },
        {
            img: [quiz1,quiz4, quiz2, quiz3, quiz4],
            name: 'QuizKing',
            description: 'Quiz King is a simple quiz app featuring a real-time scorecard and timer, with correct answers highlighted in green and wrong ones in red for instant feedback.',
            teck: 'Javascript | Html | Css',
            live: `https://quizking.netlify.app`,
            github: ``
        }
    ]


    const [count, setCount] = useState(0)
    const {isDark}= useContext(ThemeContext)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevIndex) => (prevIndex + 1) % data[0].img.length);
        }, 2000); // 1000ms = 1 second

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        Aos.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
      }, [isDark]);

    const [isLargerThan500] = useMediaQuery("(min-width: 500px)")
    const [isLargerThan400] = useMediaQuery("(min-width: 400px)")


    return (
        <Box bg={isDark?colors.dark.primary: colors.light.primary} minH={'100vh'} pb={'7rem'} pt={'2rem'} display={'flex'} flexDirection={'column'} alignItems={'center'} >
            {/* <Heading color={'white'} textAlign={'center'} w={'70%'} mb={'1.5rem'} >My Projects</Heading> */}
            
            <Text fontSize={isLargerThan500? '2.6rem': '2.2rem'} color={isDark? 'white': '#434242'} fontWeight={'450'} >My <Text as={'span'} color={colors.primary}>Projects</Text></Text>

            <Box w={'90%'}  display={'flex'}  mt={'1rem'} flexWrap={'wrap'} justifyContent={'center'}>
            {/* <Box bg={'red'} display={'flex'} overflowX={'auto'} h={'40rem'} transition={'2s'}> */}
                {/* each project----------------- */}
                {
                    data.map((elem, index) => (
                        <Box key={index} data-aos="fade-up" bg={isDark? '#181818': '#B6B6B6'} transition={'0.5s'} color={isDark?'white': '#282828'} w={'26rem'} h={isLargerThan400?'35rem':'auto'} m={'1rem'} pb={'1rem'} borderRadius={'14px'} boxShadow={isDark?'rgba(0, 0, 0, 0.35) 0px 5px 15px':'rgba(0, 0, 0, 0.35) 0px 2px 10px'}>
                            <Box bg={'black'} h={isLargerThan400?'13rem': '9rem'} w={'100%'} overflow={'hidden'} borderRadius={'14px 14px 0px 0px'} >
                                <Image src={elem.img[count]}  h={'100%'}  />
                            </Box>
                            <Box h={isLargerThan400?'18rem': '17.4rem'} p={'1rem'} position={'relative'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'}>
                                <Text fontSize={'xl'} fontWeight="600" mb={'0.5rem'}>{elem.name}</Text>
                                <Text fontSize={isLargerThan500?'lg': isLargerThan400? 'md': 'sm'} mb={'0.5rem'}>{elem.description}</Text>
                                <Text fontSize={isLargerThan500?'lg':  isLargerThan400? 'md': 'sm'} fontWeight="500" mb={'0.5rem'}><span style={{ color: '#F87C58' }}>Teck Stack:</span> {elem.teck}</Text>
                            </Box>

                            <Box display={'flex'} justifyContent={'space-evenly'}  w={'100%'}  >
                                    <Button as={'a'} href={elem.live} target='_blank' rel="noopener noreferrer"  bg={'#F87C58'} color="white" // Text color
                                        _hover={{ bg: "#DF6441" }}
                                        _active={{ bg: "#BE4321" }}
                                        w={isLargerThan400?'8rem': '6.5rem'}>
                                        Go Live
                                    </Button>

                                    <Button as={'a'} bg={'#F87C58'} color="white" 
                                    href={elem.github}
                                    target='_blank'
                                    rel="noopener noreferrer"
                                        _hover={{ bg: "#DF6441" }}
                                        _active={{ bg: "#BE4321" }}
                                        w={isLargerThan400?'8rem': '6.5rem'}>
                                        Github
                                    </Button>
                                </Box>
                        </Box>
                    ))
                }

{/* </Box> */}
            </Box>
        </Box>
    )
}

export default Projects