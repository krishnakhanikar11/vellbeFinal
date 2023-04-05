const sdk = require('api')('@cashfreedocs-new/v3#246q2ilfwcazf0');



// try {
//   const response = await axios.post('https://sandbox.cashfree.com/pg/links', {
//     customer_details: {
//       customer_phone: customer_phone,
//       customer_email: customer_email,
//       customer_name: customer_name
//     },
//     link_notify: { send_sms: true },
//     link_id: link_id,
//     link_amount: 100,
//     link_currency: 'INR',
//     link_purpose: 'Payment for event'
//   }, {
//     headers: {
//       'Content-Type': 'application/json',
//       'x-client-id': process.env.CASHFREE_APP_ID,
//       'x-client-secret': process.env.CASHFREE_APP_SECRET,
//       'x-api-version': '2022-09-01'
//     }
//   });

//   console.log(response.data)
//   res.status(response.status).json(response.data);
// } catch (error) {
//   res.status(500).json({ message: 'Error creating payment link', error });

export default function handler(req, res) {
  const { link_id, customer_phone, customer_email, customer_name } = req.body;

  sdk.createPaymentLink({
    customer_details: {
      customer_phone: customer_phone,
      customer_email: customer_email,
      customer_name: customer_name
    },
    link_notify: { send_sms: true },
    link_id: link_id,
    link_amount: 100,
    link_currency: 'INR',
    link_purpose: 'Payment for event'
  }, {
    'x-client-id': process.env.CASHFREE_APP_ID,
    'x-client-secret': process.env.CASHFREE_APP_SECRET,
    'x-api-version': '2022-09-01'
  })
    .then(({ data }) => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: 'Error creating payment link', error: err }));
}
