import React from 'react';
import {
  Box,
  Flex,
} from '@chakra-ui/core'


export default function UpcomingEvents(props) {

  const user = props.user;
  
  return (
    <Flex>
      {
        props.events.map(event => {
          return (
            <Box w='20%' h='200px' borderRadius='10px' bg='#fff' boxShadow='2px 2px 10px #bbb'>
              <p>{event.starts_at}</p>
              <p>{event.location}</p>
            </Box>
          )
        })
      }
    </Flex>
  )
}
