import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import {
  Box, 
  Flex,
  Heading,
  useToast
} from "@chakra-ui/core";
import { getEvent } from '../../utils/api';
import TopCards from '../../components/TopCards';
import BottomCards from '../../components/BottomCards';

const Event = () => {
  const router = useRouter();
  const toast = useToast();

  if (typeof window === 'undefined') return '';
  if (localStorage.jwtToken === undefined) {
    router.push('/')
  }

  const { isLoading, error, data } = useQuery(['event', router.query.eventId], getEvent);
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  
  // console.log(data);
  
  if (!data) return '';
  if (data.status === 404 && router.query.eventId !== undefined) {
    toast({
      title: "This event page does not exist.",
      status: "error",
      duration: 10000,
      isClosable: true,
    })
    return '';
  } else {
    return (
      <Flex h='846px' bg='#eee'>
        <Box w='60%' m='3.5rem 4rem 0 4rem'>
          <Heading mt='-10px' fontSize="100px" mb='120px'>
            Here's what you need to know:
          </Heading>
          <BottomCards event={data}/>
        </Box>
        <Box w='60%' m='3.5rem 4rem 0 4rem'>
          <TopCards data={data}/>
          <Heading mt='-20px' fontSize="80px">
            How to get your spot?
          </Heading>
        </Box>
      </Flex>
    );
  }
};

export default Event;