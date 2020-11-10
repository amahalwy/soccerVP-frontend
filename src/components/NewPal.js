import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from 'next/router';
import { postRsvp } from '../utils/api';
import { useMutation } from 'react-query';
import {
  Box,
  CloseButton,
  Flex,
  Text,
  useToast,
} from '@chakra-ui/core';

export default function NewPal(props) {
  const router = useRouter();
  const toast = useToast();

  const createRsvp = (rsvp) => {
    postRsvp(rsvp);
  }
  const [mutate] = useMutation(createRsvp);

  const handleCreate = async () => {
    const rsvp = new FormData();

    rsvp.append('rsvp[user_id]', props.currentUser.id)
    rsvp.append('rsvp[event_id]', props.event.id)

    try {
      await mutate(rsvp)

    } catch (error) {  
      console.log(error)
    }
  }

  const createOrder = (data, actions) => {
    // This function sets up the details of the transaction, including the amount and line item details.
    return actions.order.create({
      purchase_units: [ {
        amount:  {
          value: props.event.cost_per_participant
        }
      }]
    })
  }

  const onApprove = (data, actions) => {
    console.log(data);
    return actions.order.capture().then(function(details)  {
      // This function shows a transaction success message to your buyer.
      // alert('Transaction completed by ' + details.payer.name.given_name);

      if (details.status === "COMPLETED") {
        debugger
        handleCreate();
        localStorage.setItem('paypalDetails', JSON.stringify(details));
        toast({
          position: top,
          duration: 20000,
          isClosable: true,
          status: "success",
          render: () => {
            return (
              <Box m='auto'>
                <Flex>
                  <Text>
                    Transaction complete!
                  </Text>
                  <CloseButton />
                </Flex>
              </Box>
            )
          }
        })
      } else {
        toast({
          title: "Transaction failed.",
          description: "Please try again laster.",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
      }
    })
  }

  return (
    <PayPalScriptProvider options={{ "client-id": "sb" }}>
      <PayPalButtons 
        style={{ layout: "horizontal" }} 
        onApprove={onApprove} 
        createOrder={createOrder}
      />
      {/* return (
      <Button
        onClick={() =>
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button> */}
    </PayPalScriptProvider>
  );
}