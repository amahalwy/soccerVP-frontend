import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
// import { getEvent } from '../../utils/api';
import {
  Box, 
  Flex,
  Heading
} from "@chakra-ui/core";
import TopCards from '../../components/TopCards';
import BottomCards from '../../components/BottomCards';


const API_HOST = process.env.NODE_ENV === 'production' ? 'production_url' : 'http://localhost:5000';

const makeUrl = (path) => `${API_HOST}${path}`;

export const getEvent = (key, id) => fetch(makeUrl(`/events/${id}`), {
  headers: {
    Authorization: localStorage.jwtToken,
  }
}).then(r => r.json())

const Event = () => {
  const router = useRouter();
  const { isLoading, error, data } = useQuery(['event', router.query.eventId], getEvent);
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <Flex>
      <Box w='60%' m='4rem'>
        <Heading w='90%' size="lg" fontSize="100px" mb='120px'>
          Here's what you need to know:
        </Heading>
        <BottomCards data={data}/>
      </Box>
      <Box w='60%' m='3rem'>
        <TopCards data={data}/>
        <Heading size="lg" fontSize="80px" >
          How to get your spot?
        </Heading>
      </Box>
    </Flex>
  );
};

export default Event;
