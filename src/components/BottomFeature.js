import React from 'react';
import {
  Box,
  Heading,
  Text, 
} from "@chakra-ui/core";

export default function Feature({ title, desc, ...rest }) {
  return (
    <Box 
      p='30px'
      m='10px'
      bg='#42c2c0'
      flex="1"
      shadow="lg"
      border='none'
      rounded="lg"
      boxShadow='4px 4px 15px black'
      className='cards'
      borderWidth="1px"
      backgroundImage='linear-gradient(to top right, #319795, #133c94)'
      {...rest}
    >
      <Heading color='#eee' fontSize={24}>{title}</Heading>
      <Text color='#eee' className='card-text' mt={4} fontSize={20}>{desc}</Text>
    </Box>
  );
}