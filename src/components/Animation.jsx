// import { Box, animate, keyframes } from '@chakra-ui/react'
// import React, { useState } from 'react'
// import { Button } from 'react-scroll'

// const Animation = () => {
//   // const [size, setSize]= useState(false)
//   const [bubble, setBubble]= useState(false)
//   const handleAnimation=()=>{
//     // setSize(!size)
//     setBubble(!bubble)
//   }

//   const anime= animate({
//     keyframes:{
//       '0s': {'align-items': 'start'},
//       '50%': {'align-items': 'end'},
//       '100%': {'align-items': 'start'}
//     },
//     duration: '2s',
//       repeat: 'infinite'
//   });

//   return (
//     // <Box bg={'lightblue'} h={'85vh'} w={'100vw'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
//     //     <Box bg={'red'} w={'15rem'} h={'15rem'} borderRadius={'50%'} display={'flex'}  justifyContent={'center'} position={'relative'} >
//     //       <Box bg={'pink'} opacity={size? '100%': '0%'} w={size? '100%':'0%'} h={size? '100%':'0%'} borderRadius={'50%'} transition={'0.7s'}>
            
//     //       </Box>
//     //     </Box>

//     //     <Button onClick={handleAnimation}>Button</Button>
//     // </Box>
// // --------------------dark mode------
//     // <Box bg={'lightblue'} h={'85vh'} w={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} position={'relative'}>
//     //       <Box bg={'red'} opacity={size? '100%': '20%'} w={size? '100%':'20%'} h={size? '100%':'0%'} transition={'0.8s'} position={'absolute'} right={0} top={0}>
            
//     //       </Box>

//     //     <Button onClick={handleAnimation}>Button</Button>
//     // </Box>
//     // -------------------magic-------------

//      <Box bg={'lightblue'} h={'85vh'} w={'100vw'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
//         <Box {...anime} bg={'red'} w={'15rem'} h={'15rem'} borderRadius={'50%'} display={'flex'} alignItems={'start'} justifyContent={'center'} position={'relative'} transition={'0.8s'}>
//           <Box bg={'pink'}  w={'50%'} h={'50%'} borderRadius={'50%'} transition={'0.7s'}  > </Box>
//         </Box>

//         <Button onClick={handleAnimation}>Button</Button>
//     </Box>
//   )
// }

// export default Animation

// ---------------------images 3d------------------
        {/* https://static.vecteezy.com/system/resources/previews/011/153/364/original/3d-website-developer-working-on-laptop-illustration-png.png */}
        {/* https://static.vecteezy.com/system/resources/previews/010/871/811/original/3d-a-man-is-working-at-home-using-a-laptop-png.png */}
       {/* https://static.vecteezy.com/system/resources/previews/011/153/671/original/man-use-laptop-work-activity-3d-illustrations-png.png */}



import { Box, Heading } from '@chakra-ui/react'
       import React, { useEffect, useState } from 'react'
import { Typewriter } from 'react-simple-typewriter';
       
       const Animation = () => {

        // function dynamic(arr){
        //     for(let i=0; i<arr.length; i++){
        //         const word= arr[i]
        //         for(let j=0; j<word.length; j++){
        //             const letter= word[j]
                    
        //         }
        //     }
        // }

        // dynamic([
        //     "FULLSTACK WEB DEVELOPER",
        //     "FRONTEND DEVELOPER"
        // ])

       
          
        //   const [index, setIndex] = useState(0);
        //   const [displayText, setDisplayText] = useState('');
        //   const [reverse, setReverse] = useState(false);
        
        //   useEffect(() => {
        //     let interval;
        //     if (reverse) {
        //       interval = setInterval(() => {
        //         setDisplayText(prev => prev.slice(0, -1));
        //       }, 100);
        //     } else {
        //       interval = setInterval(() => {
        //         setDisplayText(prev => words[index].slice(0, prev.length + 1));
        //       }, 100);
        //     }
            
        //     if (!reverse && displayText === words[index]) {
        //       setReverse(true);
        //     } else if (reverse && displayText === '') {
        //       setReverse(false);
        //       setIndex((prevIndex) => (prevIndex + 1) % words.length);
        //     }
        
        //     return () => clearInterval(interval);
        //   }, [displayText, reverse, index, words]);
        

    
        
         return (
           <Box bg={'#282828'} h={'100vh'}>
            {/* <Heading> */}
            skkls
        {/* </Heading> */}
           </Box>
         )
       }
       
       export default Animation