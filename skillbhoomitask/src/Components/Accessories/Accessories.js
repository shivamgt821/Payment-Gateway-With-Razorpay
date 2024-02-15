import hpvictus from '../Assest/hpvictus1.png';
import hp from '../Assest/HpLaptop.png';
import lenovo from '../Assest/LenovoIdeapad.png';
import React, { useEffect, useState } from 'react';
import './Accessories.css';

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resolve(true);
    };

    script.onerror = () => {
      resolve(false);
    };

    document.body.appendChild(script);
  });
};

const laptopData = [
  {
    image: hpvictus,
    title: 'HP Victus Gaming',
    description: '12th Gen Intel Core i5-12450  , NVIDIA RTX 3050 GPU, 15.6-inch (39.6 cm)',
    rating: 'Rating 4/5',
    price: 10000,
  },
  {
    image: hp,
    title: 'HP Laptop 15s',
    description: 'AMD Ryzen 7 5700U, 15.6-inch (39.6 cm), FHD, 16GB DDR4, 512GB SSD, AMD Radeon Graphics, Backlit KB',
    rating: 'Rating 4.5/5',
    price: 11999,
  },
  {
    image: lenovo,
    title: 'Lenovo IdeaPad Slim 3',
    description: 'Intel Core i3 12th Gen 15.6" (39.62cm) FHD Thin & Light Laptop',
    rating: 'Rating 3.9/5',
    price: 12999,
  },
];

const Accessories = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [showResultModal, setShowResultModal] = useState(false);
  const [resultMessage, setResultMessage] = useState('');


  const handleBuyNowClick = async (price) => {
   
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_xAllRoUMpPRdhW",
      currency: "INR",
      amount: price * 100,
      name: "Shivam Computer Accessories",
      description: "Thanks for purchasing",
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      },
      prefill: {
        name: "Shivam Computer Accessories",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const closeResultModal = () => {
    setShowResultModal(false);
  };

  return (
    <div className='accessories'>
      {laptopData.map((laptop, index) => (
        <div key={index} className='card'>
          <img src={laptop.image} alt={laptop.title} />
          <h4>{laptop.title}</h4>
          <p>{laptop.description}</p>
          <span className='rating'>{laptop.rating}</span>
          <h5>Price: {laptop.price}/-</h5>
          <button onClick={() => handleBuyNowClick(laptop.price)}>Buy Now</button>
        </div>
      ))}

      {showConfirmationModal && (
        <div className='custom-modal'>
          <button className='close-button' onClick={() => setShowConfirmationModal(false)}>
            &times;
          </button>
          <p>{confirmationMessage}</p>
        </div>
      )}

      {showResultModal && (
        <div className='custom-modal'>
          <p>{resultMessage}</p>
          <button onClick={closeResultModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Accessories;

