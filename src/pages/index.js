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
      <Box pos='relative' h='90%' w='100%'>
        <Image src='https://facebook-clone-dev.s3.us-east-2.amazonaws.com/soccer-ad.jpeg' w='100%' mr='200px' className='soccer'/>

        <Box m='5% 0' pos='absolute' top='0px' left='100px'>
          <Flex justifyContent='center' mt='1%'>
            <Heading fontSize='100px'>
              <Text color='rgb(215, 219, 220)' textShadow='10px 10px 10px black'>
                Welcome to SoccerVP
              </Text>
            </Heading>
          </Flex>
          <Box>
            <Heading fontSize='40px'>
              <Text color='rgb(215, 219, 220)' textShadow='10px 10px 10px black'>
                Enjoy the ease of organizing pickup soccer
              </Text>
            </Heading>
          </Box>
          <Box color='white' mt='380px' w='300px'>
            <div className="container-modal">
              <div>
                <Button _hover={{bg: 'none'}} h='60px' fontSize='30px' onClick={openLogin} boxShadow='4px 4px 10px black'>
                  <span>
                    Get started here
                  </span>
                </Button>
              </div>
            </div>
          </Box>
        </Box>   
      </Box>
    </Box>
  )
}

export default Home;
