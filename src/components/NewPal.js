import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from 'next/router';

export default function NewPal(props) {
  const router = useRouter();

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
    console.log('actions:', actions)
    console.log('data:', data)


    // This function captures the funds from the transaction.
    return actions.order.capture().then(function(details)  {
      // This function shows a transaction success message to your buyer.
      router.push('/complete')
      alert('Transaction completed by ' + details.payer.name.given_name);
    });
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