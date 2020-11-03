import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text, 
 } from "@chakra-ui/core";

export default function Cards(data) {
   
  const newData = data.data;

  // const startTime = 
  // const end = 
  
  const location = `We'll be playing at ${newData.location}. Make sure you check the weather!`;
  const start = `Event time will be ${getDate(newData.starts_at)} - ${getEndTime(newData.ends_at)}`

  function getDate(date) {
    let newDate = '';
    let changedDate = new Date(date).toUTCString();
    let splitDate = changedDate.split(" ");

    let time = splitDate[4].split(':').slice(0,2).join(':');
    let dayAndYear = splitDate.splice(0, 4).join(' ');

    return newDate + dayAndYear + ' ' + time;
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


  function Feature({ title, desc, ...rest }) {
    return (
      <Box p='30px' m='10px' shadow="lg" borderWidth="1px" flex="1" rounded="lg" {...rest}>
        <Heading fontSize={24}>{title}</Heading>
        <Text mt={4} fontSize={20}>{desc}</Text>
      </Box>
    );
  }
  
  function StackEx() {
    return (
      <Stack >
        <Flex>
          <Feature
            title="Location"
            desc={location}
          />
          <Feature
            title="Play Time"
            desc={start}
          />
        </Flex>
        <Flex>
          <Feature
            title="Play Time"
            desc={start}
          />
          <Feature
            title="Play Time"
            desc={start}
          />
        </Flex>
      </Stack>
    );
  }
  
  return(<StackEx />);
  
}