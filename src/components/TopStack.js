import React from 'react'
import {
  Flex,
  Stack, 
 } from "@chakra-ui/core";
 import Feature from './TopFeature';

export default function TopStack(props) {

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

  const location = `We'll be playing at ${props.event.location}. Make sure you check the weather!`;
  const start = `Event time will be ${getDate(props.event.starts_at)} - ${getEndTime(props.event.ends_at)}`
  const playerInfo = `Cost of each player is $${props.event.cost_per_participant}. 
                      Book fast, this event is capped at ${props.event.max_participants} total players!`
  return (
    <Stack mb='60px' >
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
          title="Need-to-knows"
          desc={playerInfo}
        />
        <Feature
          title="Anything else?"
          desc="Reach out to the organizer for further details!"
        />
      </Flex>
    </Stack>
  );
}
