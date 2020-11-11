import React from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  List,
  ListItem,
  Text,
  useToast
} from '@chakra-ui/core';
import PastEvents from '../components/PastEvents';
import UpcomingEvents from '../components/UpcomingEvents';
import { getProfile } from '../utils/api';
import { ProfileFeature, ListFeature } from '../components/PageCards';
import { useQuery, useMutation } from 'react-query'
import { patchUser } from '../utils/api';

export default function User() {
  const router = useRouter();
  const toast = useToast();

  let user = null;
  
  if (typeof window === 'undefined') return '';
  if (!localStorage.jwtToken && !localStorage.currentUser) {
    router.push('/');
  } else {
    user = JSON.parse(localStorage.currentUser);
  }

  const updateUser = (user) => {
    debugger
    patchUser(user, data.id);
  }
  const [mutate] = useMutation(updateUser);

  const { isLoading, error, data } = useQuery(['user', user.id], getProfile);
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  if (!user.firstName || !user.lastName || !user.email) {
    toast({
      title: "Account not complete.",
      description: "Please edit your profile details.",
      status: "error",
      duration: 3000,
      isClosable: true,
    })
  } 
  
  const handleUpdate = async () => {
    const user = new FormData();
    user.append('user[first_name]', data.first_name)
    user.append('user[last_name]', data.last_name)
    user.append('user[email]', data.email)
    user.append('user[phone_number]', data.phone_number)

    try {
      await mutate(user, data.id)

    } catch (error) {  
      console.log(error)
    }
  }

  return (
    <Flex justifyContent='space-around' w='100%' m='80px 0'>
      <Box h='400px' w='30%'>
        <Box fontSize='40px' ml='5px'>
          Profile
        </Box>
        <Box mt='24px' bg='white' h='100%' w='100%' borderRadius='20px' boxShadow='1px 1px 4px #bbb'>
          <Box>
            <Box h='60%' pt='40px' m='0 30px'>
              <Box mb='20px'>
                <Flex fontSize='24px' justifyContent='space-between'>
                  <Text>First Name: </Text>
                  <Input w='50%' placeholder={data.first_name} onChange={e => data.first_name = e.currentTarget.value} />
                </Flex>
              </Box>
              <Box mb='20px'>
                <Flex fontSize='24px' justifyContent='space-between'>
                  <Text>Last Name: </Text>
                  <Input w='50%' placeholder={data.last_name} onChange={e => data.last_name = e.currentTarget.value} />
                </Flex>
              </Box>
              <Box mb='20px'>
                <Flex fontSize='24px' justifyContent='space-between'>
                  <Text>Email: </Text>
                  <Input w='50%' placeholder={data.email} onChange={e => data.email = e.currentTarget.value} />
                </Flex>
              </Box>
              <Box mb='20px'>
                <Flex fontSize='24px' justifyContent='space-between'>
                  <Text>Phone Number: </Text>
                  <Input w='50%' placeholder={data.phone_number} onChange={e => data.phone_number = e.currentTarget.value} />
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box h='10%' w='90%' m='60px auto'>
            <div className="container-modal">
              <div>
                <Button _hover={{bg: 'none'}} onClick={handleUpdate}>
                  <span>
                    Update
                  </span>
                </Button>
              </div>
            </div>
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