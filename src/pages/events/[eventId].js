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
  const { isLoading, error, data } = useQuery(['event', router.query.eventId], getEvent, {
    enabled: router.query.eventId !== undefined || router.query.eventId !== null 
  });
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
