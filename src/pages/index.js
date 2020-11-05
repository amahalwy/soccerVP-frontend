import React from 'react'
import Search from '../components/search';
import {
  Box,
  Flex,
  Heading,
  Image,
  Text
} from '@chakra-ui/core'

const Home = () => {

  const openLogin = () => {
    const login = document.querySelector('#login-button');
    console.log(login)
  }

  return (
    <Box h="100vh" 
      backgroundColor='#eee'
      zIndex='1'
    >
      <Box m='5% 0'>
        <Flex justifyContent='center' mt='1%'>
          <Heading fontSize='60px'>
            Welcome to SoccerVP
          </Heading>
        </Flex>
        <Flex justifyContent='center' >
          <Heading fontSize='40px' >
            Create an event or login below
          </Heading>
        </Flex>
      </Box>

      <Box>
        <Flex h='400px'>
          <Flex 
            className='home-cards'
          >
            <Heading m='auto' color='white' fontSize="xl">Create an event here</Heading>
          </Flex>

          <Flex 
            className='home-cards'
             onClick={openLogin}
          >
            <Heading m='auto' color='white' fontSize="xl">Log in here</Heading>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Home;
