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
import {ProfileFeature, ListFeature} from '../../components/PageCards';
// import {getUser} from '../../utils/api';

const API_HOST = process.env.NODE_ENV === 'production' ? 'production_url' : 'http://localhost:5000';
const makeUrl = (path) => `${API_HOST}${path}`;

export const getUser = (key, id) => fetch(makeUrl(`/users/${id}`), {
  headers: {
    Authorization: '... get the localStorage JWT key ...',
  }
}).then(r => r.json())

export default function User() {

  const router = useRouter();
  const { isLoading, error, data } = useQuery(['user', router.query.userId], getUser)
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  const user = data.user

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
