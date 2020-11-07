import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text, 
} from "@chakra-ui/core";
// import PaypalButton from './PaypalButton';
// import Paybutton from './PayButton';
import PaypalButton2 from './PayButton2';

export default function BottomCards(props) { 
  const event = props.event;

  const owner = event.owner;

  const ownerBox = `This event is organized by ${owner.first_name + ' ' + owner.last_name}. 
                    Reach out to them at ${owner.phone_number} for any questions`;
  const payBox = `Simply use paypal!`

  function Feature({ title, desc, ...rest }) {
    return (
      <Box p='30px' m='10px' shadow="lg" borderWidth="1px" flex="1" rounded="lg" {...rest}>
        <Heading fontSize={24}>{title}</Heading>
        <Text mt={4} fontSize={20}>{desc}</Text>
      </Box>
    );
  }

  const client = {
    sandbox: "Aadlj71Rm2jESJjR1RNen8CSn6Yc3cSNRhRZmbIHAz1CzFOJuD59ICkbS9XxEvwv0DpAhpQ8_1YyJZGR",
    // production: 'YOUR-PRODUCTION-APP-ID',
  }
  
  const ENV = process.env.NODE_ENV === 'production'
    ? 'production'
    : 'sandbox';

  const onSuccess = (payment) =>
    console.log('Successful payment!', payment);

  const onError = (error) =>
    console.log('Erroneous payment OR failed to load script!', error);

  const onCancel = (data) =>
    console.log('Cancelled payment!', data);


  function FeatureWithPaypal({ title, desc, ...rest }) {
    return (
      <Box p='30px' m='10px' shadow="lg" borderWidth="1px" flex="1" rounded="lg" {...rest}>
        <Heading fontSize={24}>{title}</Heading>
        <Text mt={4} mb='10px' fontSize={20}>{desc}</Text>

        {/* <Paybutton />         */}
        {/* <PaypalButton data={newData} /> */}
        
        {/* <PaypalButton2 
          data={event} 
          client={client}
          env={ENV}
          commit={true}
          currency={'USD'}
          total={100}
          onSuccess={onSuccess}
          onError={onError}
          onCancel={onCancel}
        />   V2 trial */}
      </Box>
    );
  }
  
  function StackEx() {
    return (
      <Stack mb='80px' >
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