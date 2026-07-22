import { Box, Heading, Text, useMediaQuery, UnorderedList, ListItem } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import ThemeContext from '../context/ThemeContext'
import colors from '../utils/utils'
import Aos from 'aos'
import 'aos/dist/aos.css';

const ProfessionalProjects = () => {
    const { isDark } = useContext(ThemeContext)
    const [isLargerThan500] = useMediaQuery("(min-width: 500px)")
    const [isLargerThan1200] = useMediaQuery("(min-width: 1200px)")

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const projects = [
        {
            title: "Fleet Management System",
            status: "Ongoing",
            tech: "React.js, Node.js, Express.js, PostgreSQL, TimescaleDB",
            points: [
                "Contributing to the development of an IoT-based Fleet Management System for real-time GPS tracking and vehicle monitoring.",
                "Developing interactive dashboards for vehicle tracking, telemetry visualization, and fleet operations.",
                "Integrating frontend components with backend APIs to display real-time and historical vehicle data.",
                "Collaborating with the team to implement scalable features and optimize application performance."
            ]
        },
        {
            title: "Transport Management System",
            status: "",
            tech: "React.js, Node.js, Express.js, MongoDB, PostgreSQL",
            points: [
                "Developed and enhanced transportation management modules, including PR/LR workflows and operational dashboards.",
                "Optimized frontend and backend interactions to reduce API latency and improve overall application responsiveness.",
                "Reduced unnecessary API calls by implementing efficient data fetching, request optimization, and state management techniques.",
                "Improved user experience by minimizing input lag during typing through debouncing and rendering optimizations.",
                "Fixed production issues and collaborated with cross-functional teams to deliver stable, high-quality features."
            ]
        },
        {
            title: "Sharanga AI",
            status: "",
            tech: "React.js, Node.js, Express.js, MongoDB, Material UI",
            points: [
                "Developed and maintained web application modules for AI-powered logistics and operational workflows.",
                "Built responsive, reusable UI components using React.js and Material UI to enhance development efficiency.",
                "Integrated frontend applications with RESTful APIs and resolved production issues to improve system reliability.",
                "Collaborated with designers and backend developers to deliver new features and optimize user experience."
            ]
        },
        {
            title: "E-Lock Management System",
            status: "",
            tech: "React.js, Node.js, Express.js, MongoDB, PostgreSQL",
            points: [
                "Developed modules for electronic lock assignment, tracking, and lifecycle management.",
                "Built dashboards and management interfaces for monitoring E-Lock operations and status updates.",
                "Integrated RESTful APIs to manage E-Lock workflows and ensure accurate data synchronization.",
                "Enhanced application usability and maintainability through reusable components and performance optimizations."
            ]
        }
    ];

    return (
        <Box bg={isDark ? colors.dark.third : colors.light.third} minH={'80vh'} pt={'2rem'} pb={'4rem'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Text fontSize={isLargerThan500 ? '2.6rem' : '2.2rem'} color={isDark ? colors.dark.text : colors.light.text} fontWeight={'450'} textAlign="center">
                Professional <Text as={'span'} color={colors.primary}>Projects</Text>
            </Text>

            <Box w={isLargerThan1200 ? '60%' : '90%'} mt={'3rem'} display={'flex'} flexDirection={'column'} gap={'2rem'}>
                {projects.map((project, index) => (
                    <Box key={index} data-aos="fade-up" bg={isDark ? colors.dark.fourth : colors.light.fourth} p={isLargerThan500 ? '2.5rem' : '1.5rem'} borderRadius={'14px'} boxShadow={isDark ? 'rgba(0, 0, 0, 0.35) 0px 5px 15px' : 'rgba(0, 0, 0, 0.35) 0px 2px 10px'} transition={'0.3s'}>
                        <Box display={'flex'} flexDirection={isLargerThan500 ? 'row' : 'column'} justifyContent={'space-between'} alignItems={isLargerThan500 ? 'center' : 'flex-start'} mb={'1.5rem'}>
                            <Box>
                                <Heading size={'md'} color={isDark ? colors.dark.text : colors.light.text}>
                                    {project.title} {project.status && <Text as="span" fontStyle="italic" fontWeight="normal" fontSize="1rem" color={isDark ? colors.dark.subText : colors.light.subText}>({project.status})</Text>}
                                </Heading>
                                <Text fontSize={'1.1rem'} color={colors.primary} fontWeight={'600'} mt={'0.4rem'}>Tech Stack: <Text as="span" color={isDark ? colors.dark.subText : colors.light.subText} fontWeight={'500'}>{project.tech}</Text></Text>
                            </Box>
                        </Box>

                        <UnorderedList color={isDark ? colors.dark.subText : colors.light.subText} spacing={3} ml={'1.2rem'} fontSize={isLargerThan500 ? '1.1rem' : '1rem'}>
                            {project.points.map((point, i) => (
                                <ListItem key={i}>{point}</ListItem>
                            ))}
                        </UnorderedList>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default ProfessionalProjects
