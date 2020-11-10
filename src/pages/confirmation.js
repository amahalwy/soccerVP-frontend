import React from 'react'
import {
  Box,
  Text
} from '@chakra-ui/core';

export default function Confirmation() {

  if (typeof window === 'undefined') return '';

  const details = JSON.parse(localStorage.paypalDetails);
  return (
    <Box>
      Some confirmation stuff
      <Text>
        {details.status}
      </Text>
    </Box>
  ) 
}
