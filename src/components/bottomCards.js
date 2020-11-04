import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text, 
} from "@chakra-ui/core";
import PaypalExpressBtn from 'react-paypal-express-checkout';

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

  const client = {
    sandbox: "Aadlj71Rm2jESJjR1RNen8CSn6Yc3cSNRhRZmbIHAz1CzFOJuD59ICkbS9XxEvwv0DpAhpQ8_1YyJZGR",
    // production: 'YOUR-PRODUCTION-APP-ID',
  }

  const onCancel = (data) => {
    // User pressed "cancel" or close Paypal's popup!
    console.log('The payment was cancelled!', data);
    // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  }

  const onError = (err) => {
    // The main Paypal's script cannot be loaded or somethings block the loading of that script!
    console.log("Error!", err);
    // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
    // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  }

  let env = 'sandbox'; // you can set here to 'production' for production
  let currency = 'USD'; // or you can set this value from your props or state
  let total = 1; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
  // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

  
  const onSuccess = (payment) => {
    // Congratulation, it came here means everything's fine!
    console.log("The payment was succeeded!", payment);
    // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
  }

  function FeatureWithPaypal({ title, desc, ...rest }) {
    return (
      <Box p='30px' m='10px' shadow="lg" borderWidth="1px" flex="1" rounded="lg" {...rest}>
        <Heading fontSize={24}>{title}</Heading>
        <Text mt={4} mb='10px' fontSize={20}>{desc}</Text>

        {/* <PayPalButton
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
            console.log(actions.order.capture)
            // return actions.order.capture().then(function(details) {
            //   // Show a success message to your buyer
            //   console.log("SOMETHING HAPPENED!!!!")
            //   alert("Transaction completed by " + details.payer.name.given_name);
  
            //   // OPTIONAL: Call your server to save the transaction
            //   return fetch("/paypal-transaction-complete", {
            //     method: "post",
            //     body: JSON.stringify({
            //       orderID: data.orderID
            //     })
            //   });
            // });
          }}
          
          onError={(err) => {
            console.log(err)
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
        /> */}

  

        <PaypalExpressBtn 
          env={env} 
          client={client} 
          currency={currency} 
          total={total} 
          onError={onError} 
          onSuccess={onSuccess} 
          onCancel={onCancel} 
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