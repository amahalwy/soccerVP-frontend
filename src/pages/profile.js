import React from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  useToast
} from '@chakra-ui/core';
import PastEvents from '../components/PastEvents';
import UpcomingEvents from '../components/UpcomingEvents';

import { ProfileFeature, ListFeature } from '../components/PageCards';

export default function User() {
  const [active, setActive] = React.useState(null);
  const router = useRouter();
  const toast = useToast();

  let user = null;

  if (typeof window === 'undefined') return '';
  if (!localStorage.jwtToken) {
    router.push('/');
  } else {
    user = JSON.parse(localStorage.currentUser);
    console.log(user);
  }
  
  if (!user.first_name || !user.last_name || !user.email) {
    toast({
      title: "Account not complete.",
      description: "Please edit your profile details.",
      status: "error",
      duration: 9000,
      isClosable: true,
    })
  }

  // const renderComponent = () => {
  //   if ()
  // }

  return (
    <Box backgroundColor='#eee' h='846px'>
      <Box m='40px auto' h='200px' w='80%'>
        <Box fontSize='40px' >Profile</Box>
        <Flex pt='10px' justifyContent='space-between' h='200px'>
          <Box border='1px solid black' bg='#319795' w='45%' borderRadius='10px'>Left</Box>
          <Box border='1px solid black' bg='#319795' w='45%' h='100%' borderRadius='10px'>Right</Box>
        </Flex>
      </Box>
      <Box m='100px auto' h='70px' w='80%' >
        <Box fontSize='40px'>Events</Box>
        <Flex pt='10px' borderBottom='1px solid black'>
          <Box mr='5px' h='100%' >
            <Box className='eb-btn' mb='1px' bg='#eee' p='5px 10px'>Upcoming Events</Box>
            <Box className='isSelected'></Box>
          </Box>
          <Box mr='5px' h='100%'>
            <Box className='eb-btn' mb='1px' bg='#eee' p='5px 10px'>History</Box>
            <Box></Box>
            </Box>
          <Box mr='5px' h='100%'>
            <Box className='eb-btn' mb='1px' bg='#eee' p='5px 10px'>Owner</Box>
            <Box></Box>
          </Box>
        </Flex>
      </Box>
      <Box m='40px auto' h='70px' w='80%' border='1px solid black' >
        <UpcomingEvents user={user}/>
        <PastEvents user={user}/>
      </Box>
      
    </Box> 
  )
}