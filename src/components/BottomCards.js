import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text, 
} from "@chakra-ui/core";
import PayPalBtn from './PayPal';

export default function BottomCards(props) { 
  const event = props.event;

  const owner = event.owner;

  const ownerBox = `This event is organized by ${owner.first_name + ' ' + owner.last_name}. 
                    Reach out to them at ${owner.phone_number} for any questions.`;
  const payBox = `It's easy. Simply use paypal's quick checkout!`

  function Feature({ title, desc, ...rest }) {
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

  function FeatureWithPaypal({ title, desc, ...rest }) {
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
        <Text color='#eee' className='card-text' mt={4} mb='10px' fontSize={20}>{desc}</Text>
        <PayPalBtn />
      </Box>
    );
  }
  
  function StackEx() {
    return (
      <Stack >
        <Flex>
          <Feature
            title="Organizer"
            desc={ownerBox}
          />
          <FeatureWithPaypal
            title="How to register"
            desc={payBox}
          />
        </Flex>
      </Stack>
    );
  }
  
  return(<StackEx />);
 
}