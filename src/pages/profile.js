import React from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Flex,
  Heading,
  List,
  ListItem,
  Text,
  useToast
} from '@chakra-ui/core';
import PastEvents from '../components/PastEvents';
import UpcomingEvents from '../components/UpcomingEvents';
import { getProfile } from '../utils/api';
import { ProfileFeature, ListFeature } from '../components/PageCards';
import { useQuery } from 'react-query'

export default function User() {
  // const [active, setActive] = React.useState(null);
  const router = useRouter();
  const toast = useToast();

  let user = null;
  
  if (typeof window === 'undefined') return '';
  if (!localStorage.jwtToken && !localStorage.currentUser) {
    router.push('/');
  } else {
    user = JSON.parse(localStorage.currentUser);
  }

  const { isLoading, error, data } = useQuery(['user', user.id], getProfile);
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  
  // if (!user.first_name || !user.last_name || !user.email) {
  //   toast({
  //     title: "Account not complete.",
  //     description: "Please edit your profile details.",
  //     status: "error",
  //     duration: 3000,
  //     isClosable: true,
  //   })
  // }

  // const renderComponent = () => {
  //   if ()
  // }

  console.log(data);

  return (
    <Box backgroundColor='#eee' h='846px' w='90%' m='0 auto'>
      <Box m='40px auto' h='200px' w='80%'>
        <Box fontSize='40px' >Profile</Box>

        <Box>
          <Flex pt='10px' h='200px' justifyContent='flex-start'>
            <Box h='50%' mr='20px' borderRadius='10px' fontSize='24px'>
              <Flex>
                <Text textDecor='underline' mr='5px'>First Name: </Text>
                <Text>{data.first_name}</Text>
              </Flex>
              <Flex>
                <Text textDecor='underline' mr='5px'>Email: </Text>
                <Text>{data.email}</Text>
              </Flex>
            </Box>
            <Box h='50%' borderRadius='10px' fontSize='24px'>
              <Flex>
                <Text textDecor='underline' mr='5px'>Last Name: </Text>
                <Text>{data.last_name}</Text>
              </Flex>
              <Flex>
                <Text textDecor='underline' mr='5px'>Phone Number: </Text>
                <Text>{data.phone_number}</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>

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
        <UpcomingEvents user={user} events={data.events}/>
        {/* <PastEvents user={user}/> */}
      </Box>
      
    </Box> 
  )
}