import React from 'react';
import { useParams } from 'react-router-dom';
import Razorpay from 'razorpay';

const RazorpayCheckout = () => {
  const { orderId } = useParams(); // You might need to set up your routes accordingly.

  const handlePayment = async () => {
    // Fetch the order details from your server
    const response = await fetch(`YOUR_SERVER_ENDPOINT/${orderId}`);
    const order = await response.json();

    // Initialize Razorpay
    const options = {
      key: 'YOUR_RAZORPAY_API_KEY',
      amount: order.amount,
      currency: order.currency,
      name: 'Your Company Name',
      description: 'Purchase description',
      order_id: order.id,
      handler: function (response) {
        // Handle the success response from Razorpay
        console.log(response);
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9876543210',
      },
      theme: {
        color: '#528FF0',
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <h2>Razorpay Checkout</h2>
      <button onClick={handlePayment}>Proceed to Pay</button>
    </div>
  );
};

export default RazorpayCheckout;
