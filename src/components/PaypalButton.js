import React from 'react';
// import PaypalExpressBtn from 'react-paypal-express-checkout';

class PaypalButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: true
    }
  }

  componentDidMount() {
    // this.setState({isEnabled: true});
    paypal.Button.render(
      {
        env: 'sandbox',
        client: {
          sandbox: 'Aadlj71Rm2jESJjR1RNen8CSn6Yc3cSNRhRZmbIHAz1CzFOJuD59ICkbS9XxEvwv0DpAhpQ8_1YyJZGR'
        },

        payment: function(data, actions) {
          return actions.payment.create({
            transactions: [
              {
                amount: {
                  total: '1.00',
                  currency: 'USD'
                }
              }
            ]
          })
        },
        // commit: true,

        onAuthorize: function(data, actions) {
          return actions.payment.execute().then(function(response) {
            console.log('Payment complete!')
            location = '/home'
          })
        },
        
        onCancel: function(data) {
          console.log('Payment was cancelled')
        }
      },
      '#paypal-express-btn'
    )
  }

  render() {

    return (
      <div>
        {this.state.isEnabled ? <div id='paypal-express-btn'/> : 'Loading...'}
      </div>
    )
  }

  // const onSuccess = (payment) => {
  //   debugger
  //   // 1, 2, and ... Poof! You made it, everything's fine and dandy!
  //   window.somethingStupid = "stupid"

  //   // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
  // }

  // const onCancel = (data) => {
  //   // The user pressed "cancel" or closed the PayPal popup
  //   console.log('Payment cancelled!', data);
  //   // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
  // }

  // const onError = (err) => {
  //   // The main Paypal script could not be loaded or something blocked the script from loading
  //   console.log("Error!", err);
  //   // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
  //   // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
  // }

  // let env = 'sandbox'; // you can set this string to 'production'
  // let currency = 'USD'; // you can set this string from your props or state  
  // let total = props.data.cost_per_participant;  // this is the total amount (based on currency) to charge
  // // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

  // const client = {
  //   sandbox: 'Aadlj71Rm2jESJjR1RNen8CSn6Yc3cSNRhRZmbIHAz1CzFOJuD59ICkbS9XxEvwv0DpAhpQ8_1YyJZGR',
  //   production: 'YOUR-PRODUCTION-APP-ID',
  // }
  // // In order to get production's app-ID, you will have to send your app to Paypal for approval first
  // // For your sandbox Client-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App" unless you have already done so):
  // //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
  // // Note: IGNORE the Sandbox test AppID - this is ONLY for Adaptive APIs, NOT REST APIs)
  // // For production app-ID:
  // //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

  // // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
  // return (
  //   <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
  // );
}

export default PaypalButton;