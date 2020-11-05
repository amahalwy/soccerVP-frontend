// import { PayPalButton } from "react-paypal-button-v2";

// export default function PayButton() {
  
//     return (
//       <PayPalButton
//         amount="0.01"
//         // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
//         onSuccess={(details, data) => {
//           alert("Transaction completed by " + details.payer.name.given_name);
//           location = '/home'
 
//           // OPTIONAL: Call your server to save the transaction
//           return fetch("/paypal-transaction-complete", {
//             method: "post",
//             body: JSON.stringify({
//               orderID: data.orderID
//             })
//           });
//         }}
//         options={{
//           clientId: "PRODUCTION_CLIENT_ID"
//         }}
//       />
//     );
  
// }