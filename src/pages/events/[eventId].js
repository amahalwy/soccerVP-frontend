import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
// import { getEvent } from '../../utils/api';
import {
  Box, 
  Flex,
  Heading
} from "@chakra-ui/core";
import { getEvent } from '../../utils/api';
import TopCards from '../../components/TopCards';
import BottomCards from '../../components/BottomCards';

const Event = () => {
  const router = useRouter();

  if (typeof window === 'undefined') return '';
  if (localStorage.jwtToken === undefined) {
    router.push('/')
  }
  
  const { isLoading, error, data } = useQuery(['event', router.query.eventId], getEvent, {
    enabled: !!router.query.eventId
  });
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  if (!router.query.eventId) return '';

  return (
    <Flex h='846px' bg='#eee'>
      <Box w='60%' m='3.5rem 4rem 0 4rem'>
        <Heading w='90%' size="lg" fontSize="100px" mb='120px'>
          Here's what you need to know:
        </Heading>
        <BottomCards event={data}/>
      </Box>
      <Box w='60%' m='3.5rem 4rem 0 4rem'>
        <TopCards data={data}/>
        <Heading size="lg" fontSize="80px" >
          How to get your spot?
        </Heading>
      </Box>
    </Flex>
  );
};

export default Event;
