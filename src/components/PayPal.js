import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import { useRouter } from 'next/router';

export default function PayPalBtn () {

  const router = useRouter();
  // const { amount, onSuccess, currency } = this.props;
  return (
    <PayPalButton
      amount="1.00"
      onSuccess={(details, data) => {
        console.log(data);
        // console.log("Transaction completed by " + details.payer.name.given_name);
        router.push('/complete')

        // OPTIONAL: Call your server to save the transaction
        return fetch("/rsvps", {
          
          // method: "post",
          // body: JSON.stringify({
          //   orderID: data.orderID
          // })
        });
      }}

      catchError={(err) => {
        console.log(err);
      }}
    />
  );
}