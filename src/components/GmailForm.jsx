import { Box, Button, Icon, Input, Text, Textarea, useMediaQuery, useToast } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import emailjs from 'emailjs-com';
import { RxCross2 } from 'react-icons/rx';
import colors from '../utils/utils';
import ThemeContext from '../context/ThemeContext';

const GmailForm = ({setShowGmailForm}) => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
  const toast = useToast();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_kma268l', 'template_51f21wr', form, 'g9oi9GXK1F5peQDbX')
      .then((response) => {
        toast({title: 'Message sent successfully!', status: 'success', duration: 3000, isClosable: true,
        })
        setForm({ name: '', email: '', message: '' });
        setShowGmailForm(false)
      }, (err) => {
        // setStatus('Failed to send message. Please try again.');
        console.log(err)
        toast({title: 'Email sending failed', status: 'error', duration: 3000, isClosable: true})
        
      });

  };

  const {isDark}= useContext(ThemeContext)

  const [isLargerThan400] = useMediaQuery("(min-width: 400px)")

  return (
    // onClick={()=> setShowGmailForm(false)}
    <Box bg={'rgba(0, 0, 0, 0.7)'}  position={'fixed'} top={'0rem'} w={'100%'} h={'100%'} zIndex={999} display={'flex'} justifyContent={'center'} alignItems={'end'}>
       <Box as='form' onSubmit={handleSubmit} bg={isDark?colors.dark.primary: colors.light.primary} color={isDark?'white':'#282828'} w={isLargerThan400?'20rem': '17rem'} h={'27rem'} borderRadius={'md'} p={'1rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} position={'fixed'} bottom={'1rem'} transition={'0.6s'}>
      <Text textAlign={'center'} fontSize={'1.2rem'} fontWeight={600} pb={'1rem'}>Send Gmail</Text>
      <Box>
        Name:
        <Input type="text" name="name" placeholder='Enter your name' value={form.name} onChange={handleChange} required />
      </Box>
      <br />
      <Box>
        Email:
        <Input type="email" name="email" placeholder='Enter your email' value={form.email} onChange={handleChange} required />
      </Box>
      <br />
      <Box>
        Message:
        <Textarea name="message" placeholder='Write message here..' value={form.message} onChange={handleChange} required />
      </Box>
      <br />
      <Button type="submit" bg={'#F87C58'}>Send</Button>

<Icon as={RxCross2} fontSize={'1.5rem'} cursor={'pointer'} position={'absolute'} right={'1rem'} top={'1rem'} onClick={()=> setShowGmailForm(false)}/>
    </Box>
    </Box>
  )
}

export default GmailForm