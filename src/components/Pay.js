import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

class PayPalBtn extends React.Component {
    render() {
      // const { amount, onSuccess, currency } = this.props;
      const amount = '0.1'
      const currency = 'USD'
        return (
            <PayPalButton
              amount={amount}
              currency={currency}
              onSuccess={(details, data) => onSuccess(details, data)}
              options={{
                clientId: "your client id here"
              }}
          />
        );
    }
}
export default PayPalBtn;