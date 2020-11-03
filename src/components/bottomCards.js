import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text, 
} from "@chakra-ui/core";
import { PayPalButton } from "react-paypal-button-v2";

export default function topCards(data) { 
  const newData = data.data;

  const owner = newData.user;

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

  function FeatureWithPaypal({ title, desc, ...rest }) {
    return (
      <Box p='30px' m='10px' shadow="lg" borderWidth="1px" flex="1" rounded="lg" {...rest}>
        <Heading fontSize={24}>{title}</Heading>
        <Text mt={4} mb='10px' fontSize={20}>{desc}</Text>
        <PayPalButton
          shippingPreference="NO_SHIPPING"
          client-id='sb'
          createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: "USD",
                value: newData.cost_per_participant
              }
            }],
            });
          }}
          onApprove={(data, actions) => {
          // Capture the funds from the transaction
            return actions.order.capture().then(function(details) {
              // Show a success message to your buyer
              alert("Transaction completed by " + details.payer.name.given_name);
  
              // OPTIONAL: Call your server to save the transaction
              return fetch("/paypal-transaction-complete", {
                method: "post",
                body: JSON.stringify({
                  orderID: data.orderID
                })
              });
            });
          }}

          // onSuccess={(details, data) => {
          //   alert("Transaction completed by " + details.payer.name.given_name);
  
            // OPTIONAL: Call your server to save the transaction
            // return fetch("/paypal-transaction-complete", {
            //   method: "post",
            //   body: JSON.stringify({
            //     orderID: data.orderID
            //   })
            // });
          // }}

            // return fetch("/paypal-transaction-complete", {
            //   method: "post",
            //   body: JSON.stringify({
            //     orderID: data.orderID
            //   })
            // });


          // options={{
          //   clientId: "PRODUCTION_CLIENT_ID"
          // }}
        />
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