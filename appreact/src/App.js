import React from 'react';
var Client = require('@paymentsds/mpesa');

const client = new Client({
  apiKey: '<REPLACE>', // API Key
  publicKey: '<REPLACE>', // Public Key
  serviceProviderCode: '<REPLACE>', // input_ServiceProviderCode
});
const paymentData = {
  from: '841234567', // input_CustomerMSISDN
  reference: '11114', // input_ThirdPartyReference
  transation: 'T12344CC', // input_TransactionReference
  amount: '10', // input_Amount
};
client
  .receive(paymentData)
  .then((r) => {
    console.log(r.data);
  })
  .catch((e) => {
    console.log(e);
  });
const App = () => {
  return (
    <div>
      <button>Fech</button>
    </div>
  );
};

export default App;
