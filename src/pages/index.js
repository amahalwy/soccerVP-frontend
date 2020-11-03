import React from 'react'
import Search from '../components/search';
import {
  Box,
  Image
} from '@chakra-ui/core'

const Home = () => {
  return (
    <Box h="100%" >
      <Box backgroundColor='#fff' zIndex='5'>
        <Search/>
      </Box>
      <Box 
        mt='-450px' 
        h='852px' 
        backgroundColor='black'
        // backgroundImage="url('https://bit.ly/sage-adebayo')"
        // objectFit='contain'
        opacity='0.5'
        zIndex='1'
      >
      </Box>
    </Box>
  )
}

export default Home;
