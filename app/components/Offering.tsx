'use client'
import React, { useState } from 'react';

const ChurchOffering: React.FC = () => {
  const [amount, setAmount] = useState<number | string>('');

  const handlePay = () => {
    if (amount) {
      // Redirect to Google Pay with the dummy number
      const googlePayUrl = `https://pay.google.com/gp/p/ui/pay?phoneNumber=8344578745&amount=${amount}`;
      window.open(googlePayUrl, '_blank');
    } else {
      alert('Please enter a valid amount');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">Church Offering</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handlePay}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Pay
      </button>
    </div>
  );
};

export default ChurchOffering;
