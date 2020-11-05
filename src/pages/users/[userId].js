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
import { ProfileFeature, ListFeature } from '../../components/PageCards';
import { getUser } from '../../utils/api';

export default function User() {

  const router = useRouter();
  const { isLoading, error, data } = useQuery(['user', router.query.userId], getUser, {
    // enabled: router.query.userId !== null || router.query.userId !== "null"
  })
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  const user = data

  return (
    <Box backgroundColor='#eee' h='100vh'>
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
        </Box>
        <Box w='40%'>
          <ListFeature title={"Upcoming Events"} w='100%'/>
          <ListFeature title={"Checkout history"} w='100%' />
        </Box>
      </Flex>
    </Box>
  )
}
