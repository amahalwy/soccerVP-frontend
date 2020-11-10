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
    return actions.order.capture().then(function(details)  {
      // This function shows a transaction success message to your buyer.
      // alert('Transaction completed by ' + details.payer.name.given_name);
      console.log(details);

      if (details.status === "COMPLETED") {
        localStorage.setItem('paypalDetails', JSON.stringify(details));
        router.push('/confirmation');
      } else {
        // Show some type of error
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