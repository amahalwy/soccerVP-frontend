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
  
  if (!user.first_name || !user.last_name || !user.email) {
    toast({
      title: "Account not complete.",
      description: "Please edit your profile details.",
      status: "error",
      duration: 3000,
      isClosable: true,
    })
  }

  // const renderComponent = () => {
  //   if ()
  // }

  console.log(data);

  return (
    <Flex justifyContent='space-around' w='100%' m='80px 0'>
      <Box h='500px' w='30%'>
        <Box fontSize='40px' ml='5px'>
          Profile
        </Box>
        <Box mt='24px' bg='white' h='100%' w='100%' borderRadius='20px' boxShadow='2px 2px 10px #bbb'>
          <Box h='25%'>
            <Box>
              <img src=''/>
            </Box>
            Image here
          </Box>
          <Box h='40%' m='10px 30px'>
            <Box mb='20px'>
              <Flex fontSize='24px' justifyContent='space-between'>
                <Text>First Name: </Text>
                <Text>{data.first_name}</Text>
              </Flex>
            </Box>
            <Box mb='20px'>
              <Flex fontSize='24px' justifyContent='space-between'>
                <Text>Last Name: </Text>
                <Text>{data.last_name}</Text>
              </Flex>
            </Box>
            <Box mb='20px'>
              <Flex fontSize='24px' justifyContent='space-between'>
                <Text>Email: </Text>
                <Text>{data.email}</Text>
              </Flex>
            </Box>
            <Box mb='20px'>
              <Flex fontSize='24px' justifyContent='space-between'>
                <Text>Phone Number: </Text>
                <Text>{data.phone_number}</Text>
              </Flex>
            </Box>
          </Box>
          <Box h='10%'>
            Edit and submit portion
          </Box>
        </Box>
      </Box>


      <Box w='40%'>
        <Box fontSize='40px'>
          <Box h='70px' w='100%' >
            <Box fontSize='40px'>Events</Box>
            <Flex pt='10px' borderBottom='1px solid #ccc' fontSize='20px'>
              <Box mr='5px' h='100%' >
                <Box className='eb-btn' bg='#eee' p='5px 10px'>Upcoming Events</Box>
                <Box id='upcoming' className='isSelected'></Box>
              </Box>
              <Box mr='5px' h='100%'>
                <Box className='eb-btn' bg='#eee' p='5px 10px'>History</Box>
                <Box id='history'></Box>
              </Box>
              <Box mr='5px' h='100%'>
                <Box className='eb-btn' bg='#eee' p='5px 10px'>Owner</Box>
                <Box id='owner'></Box>
              </Box>
            </Flex>
            <Box>
              <UpcomingEvents user={user} events={data.events}/>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  )
}