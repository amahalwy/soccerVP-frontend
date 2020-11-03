import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getEvent } from '../../utils/api';
import {
  Box, 
  Flex,
  Heading
} from "@chakra-ui/core";
import Cards from '../../components/cards';

const Event = () => {
  const router = useRouter();

  const { isLoading, error, data } = useQuery(['event', router.query.eventId], getEvent);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <Flex>
      <Box w='60%' m='4rem'>
        <Heading w='90%' size="lg" fontSize="60px">
          Here's what you need to know:
        </Heading>
      </Box>
      <Box w='60%' m='3rem'>
        <Cards data={data}/>
        <Heading size="lg" fontSize="50px" >
          How to get a spot?
        </Heading>
      </Box>
    </Flex>
  );
};

export default Event;
