import React from 'react';
import {
  Box,
  Flex,
  Text
} from '@chakra-ui/core'


export default function UpcomingEvents(props) {

  function getDate(date) {
    let newDate = '';
    let changedDate = new Date(date).toUTCString();
    let splitDate = changedDate.split(" ");

    let time = splitDate[4].split(':').slice(0,2).join(':');
    let dayAndYear = splitDate.splice(0, 4).join(' ');

    return newDate + dayAndYear + '; ' + time;
  }

  function getEndTime(date) {
    let splitDate = new Date(date).toUTCString().split(" ");

    let time = splitDate[4].split(':').slice(0,2).join(':');
    
    let timeFrame = '';
    if (time.split(':')[0] < 12) {
      timeFrame = ' a.m.';
    } else {
      timeFrame = ' p.m.'
    }

    return time + timeFrame;
  }

  const user = props.user;

  if (props.events.length === 0) {
    return (
      <Box>
        No upcoming events
      </Box>
    )
  } else {
    return (
      <Flex>
        {
          props.events.map(event => {
            return (
              <Box m='20px 20px 20px 0' w='300px' h='200px' borderRadius='10px' bg='#fff' boxShadow='2px 2px 10px #bbb'>
                <Box mb='130px'></Box>
                <Text ml='10px' fontSize='20px'>{event.location}</Text>
                <Text ml='10px' fontSize='16px'>{getDate(event.starts_at)} - {getEndTime(event.ends_at)}</Text>
              </Box>
            )
          })
        }
      </Flex>
    )
  }
}
