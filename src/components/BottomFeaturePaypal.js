import React from 'react';
import {
  Box,
  Heading,
  Text, 
} from "@chakra-ui/core";
import PayPalBtn from './PayPal';
import NewPal from './NewPal';

export default function FeatureWithPaypal({ title, desc, event, currentUser, ...rest }) {

  const showPaypal = () => {
    if (event.owner.id !== currentUser.id) {
      <NewPal event={event} currentUser={currentUser}/>
    } else {
      return '';
    }
  }

  const showText = (desc) => {
    if (event.owner.id !== currentUser.id) {
      <Text color='#eee' className='card-text' mt={4} mb='10px' fontSize={20}>{desc}</Text>
    } else {
      return (
        <Text color='#eee' className='card-text' mt={4} mb='10px' fontSize={20}>
          You are the organizer of this event. Check out your profile to see more details.
        </Text>
      )
    }
  }

  return (
    <Box 
      p='30px'
      m='10px'
      bg='#319795'
      flex="1"
      shadow="lg"
      border='none'
      rounded="lg"
      boxShadow='4px 4px 15px black'
      borderWidth="1px"
      backgroundImage='linear-gradient(to top right, #319795, #133c94)'
      {...rest}
    >
      <Heading color='#eee' fontSize={24}>{title}</Heading>
      {showText(desc)}
      {showPaypal()}
      {/* <NewPal event={event} currentUser={currentUser}/> */}
    </Box>
  );
}