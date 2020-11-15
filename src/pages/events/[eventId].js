import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import {
  Box, 
  Flex,
  Heading,
  Text,
  useToast
} from "@chakra-ui/core";
import { getEvent } from '../../utils/api';
import TopCards from '../../components/TopCards';
import BottomCards from '../../components/BottomCards';
import NewPal from '../../components/NewPal';

const Event = () => {
  const router = useRouter();
  const toast = useToast();
  const desc = `It's easy. Simply use paypal's quick checkout below!`

  React.useEffect(() => {
    if (localStorage.jwtToken === undefined) {
      // Show error
      router.push('/')
    }
  }, [])

  const { isLoading, error, data, isError } = useQuery(['event', router.query.eventId], getEvent, {
    onSettled: (data, err) => {
      if (data.status === 404) {
        toast({
          title: "This event page does not exist.",
          status: "error",
          duration: 10000,
          isClosable: true,
        })
      }
    },
    enabled: router.query.eventId
  });
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  if (data && data.status === 404 || !data) return 'This event does not exist.';

  const currentUser = JSON.parse(localStorage.currentUser)

  const showPaypal = () => {
    if (data.owner.id !== currentUser.id) {
      return (
        <NewPal event={data} currentUser={currentUser}/>
      )
    } else {
      return '';
    }
  }

  const showText = (desc) => {
    if (data.owner.id !== currentUser.id) {
      return (
        <Text color='black' className='card-text' fontSize={20}>{desc}</Text>
      )
    } else {
      return (
        <Text color='black' className='card-text' ml='20px' fontSize={20}>
          You are the organizer of this event. Check out your profile to see more details.
        </Text>
      )
    }
  }

  return (
    <Box h='600px' w='70%' m='0 auto' bg='white' borderRadius='0 0 10px 10px' boxShadow='0 0 1px black' >
      <Box m='20px 40px' w='90%' fontSize='40px' borderBottom='1px solid #ccc'>
        Event Details
      </Box>
      <Flex m='30px 40px' w='90%' >

        <Box w='50%' mr='20px'>
          <Box m='20px 0' w='100%'>
            <Flex  
              border='none' 
              borderWidth="1px" 
            >
              <Box w='40%'>
                <Heading color='black' fontSize='24px'>Organizer</Heading>
              </Box>
              <Box>
                <Text color='black' ml='20px' fontSize='20px'>
                  This event is organized by {data.owner.first_name} {data.owner.last_name}.
                  Reach out to them at {data.owner.phone_number} for any questions.
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box m='100px 0'>
            <Flex  
              border='none' 
              borderWidth="1px" 
            >
              <Box w='30%'>
                <Heading color='black' fontSize='24px'>Need-to-knows</Heading>
              </Box>
              <Box>
                <Text color='black' ml='20px' fontSize='20px'>
                  Cost of each player is ${data.cost_per_participant}. 
                  Book fast, this event is capped at ${data.max_participants} total players!
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box m='100px 0'>
            <Flex  
              border='none' 
              borderWidth="1px" 
              >
              <Box w='20%'>
                <Heading color='black' fontSize='24px'>Anything else?</Heading>
              </Box>
              <Box>
                <Text color='black' ml='20px' fontSize='20px'>
                  Reach out to the organizer for further details.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>

        <Box w='45%'>
          <Box m='20px 0' h='32%' w='100%'>
            <Flex  
              border='none' 
              borderWidth="1px" 
              >
              <Heading color='black' fontSize='24px'>Location</Heading>
              <Text color='black' ml='30px' fontSize='20px'>
                We'll be playing at {data.location}. Make sure you check the weather!
              </Text>
            </Flex>
          </Box>

          <Box h='30%' w='100%'>
            <Flex  
              border='none' 
              borderWidth="1px" 
              >
              <Heading color='black' fontSize='24px'>How to register</Heading>
              {showText(desc)}
            </Flex>
          </Box>
          <Box h='100%'>
            {showPaypal()}
          </Box>
        </Box>


      </Flex>
    </Box>
  )
};

export default Event;