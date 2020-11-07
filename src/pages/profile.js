import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
} from '@chakra-ui/core';
import { ProfileFeature, ListFeature } from '../components/PageCards';

export default function User() {
  const router = useRouter();

  let user = null;

  if (typeof window === 'undefined') return '';
  if (!localStorage.jwtToken) {
    router.push('/')
  } else {
    user = JSON.parse(localStorage.currentUser)
  }

  return (
    <Box backgroundColor='#eee' h='846px'>
      <Flex justifyContent='center' mt='40px'>
        <Heading size="lg" fontSize="60px">
          Welcome to SoccerVP, {user.first_name}
        </Heading>
      </Flex>
      <Flex justifyContent='center'>
        <Heading size="lg" fontSize="30px">
          We hope you enjoy your experience.
        </Heading>
      </Flex>
      <Flex mt='60px' w='100%' justifyContent='center'>
        <Box w='50%'>
          <ProfileFeature title={'Your Profile'} w='80%'/>
          {user.first_name}
        </Box>
        <Box w='40%'>
          <ListFeature title={"Upcoming Events"} w='100%' mb='20px'/>
          <ListFeature title={"Checkout history"} w='100%' />
        </Box>
      </Flex>
    </Box>
  )
}


