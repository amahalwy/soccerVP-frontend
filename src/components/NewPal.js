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

      if (details.status === "COMPLETED") {
        handleCreate();
        localStorage.setItem('paypalDetails', JSON.stringify(details));
        setTimeout(() => {
          router.push('/profile')
        }, 2000);
        toast({
          status: "success",
          position: top,
          duration: 2000,
          isClosable: true,
          title: "Transaction completed!",
          description: "Moving to your profile...",
        })
      } else {
        toast({
          title: "Transaction failed.",
          description: "Please try again later.",
          status: "error",
          duration: 3000,
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
    </PayPalScriptProvider>
  );
}