import { Box, Button, Input, Textarea } from '@chakra-ui/react'
import React, { useState } from 'react'
import emailjs from 'emailjs-com';

const GmailForm = ({setShowGmailForm}) => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
      .then((response) => {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      }, (err) => {
        setStatus('Failed to send message. Please try again.');
        console.log(err);
      });
  };
  return (
    <Box bg={'black'} onClick={()=> setShowGmailForm(false)} position={'fixed'} top={'0rem'} w={'100%'} h={'100%'} zIndex={999} display={'flex'} justifyContent={'center'} alignItems={'end'}>
       <Box as='form' bg={'white'} w={'20rem'} h={'25rem'} borderRadius={'md'} p={'1rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-evenly'} position={'fixed'} bottom={'1rem'} transition={'1s'} onSubmit={handleSubmit}>
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
      <p>{status}</p>

      <Button bg={'#F87C58'} position={'absolute'} right={'1rem'} top={'1rem'} onClick={()=> setShowGmailForm(false)} >Cancel</Button>
    </Box>
    </Box>
  )
}

export default GmailForm