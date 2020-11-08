import React from 'react';
import {
  Box 
} from '@chakra-ui/core'


export default function UpcomingEvents(props) {

  const user = props.user;
  
  return (
    <Box>
      {
        props.events.map(event => {
          return (
            <div>
              <p>{event.location}</p>
            </div>
          )
        })
      }
    </Box>
  )
}
