import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text, 
} from "@chakra-ui/core";
import BottomStack from './BottomStack';

export default function BottomCards(props) { 
  const event = props.event;

  return(
    <BottomStack event={event}/>
  );
 
}