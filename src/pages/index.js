import React from 'react'
import Search from '../components/search';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text
} from '@chakra-ui/core'

const Home = () => {

  const openLogin = () => {
    document.getElementById('menubutton-6').click()

    setTimeout(() => {
      document.getElementById('login-button').click();
    }, 1);
  }

  return (
    <Box h="100%" 
      backgroundColor='#ddd'
    >
      <Box pos='relative' h='100%' w='100%'>
        <Image src='https://facebook-clone-dev.s3.us-east-2.amazonaws.com/soccer-ad.jpeg' w='100%' mr='200px' className='soccer'/>

        <Box m='5% 0' pos='absolute' top='0px' left='100px'>
          <Flex justifyContent='center' mt='1%'>
            <Heading fontSize='100px' color='white'>
              Welcome to SoccerVP
            </Heading>
          </Flex>
          <Box>
            <Heading fontSize='40px' color='white'>
              Enjoy the ease of group managing soccer
            </Heading>
          </Box>
          <Box color='white' mt='350px'>
            <Button variantColor="teal" h='70px' w='300px' borderRadius='10px' onClick={openLogin}>
              <Text fontSize='30px'>
                Get started here
              </Text>
            </Button>
          </Box>
        </Box>   
      </Box>
    </Box>
  )
}

export default Home;
