import React, { useState } from "react";
import "./Payoneer.css";
export default function Payoneer({ onPayoneerPayment }) {
  const [payoneerDetails, setPayoneerDetails] = useState({
    accountNumber: "",
    routingNumber: "",
    accountHolderName: "",
  });

  const handlePayoneerChange = (event) => {
    const { name, value } = event.target;
    setPayoneerDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handlePayoneerPayment = () => {
    // Validate Payoneer details before proceeding with payment
    if (
      payoneerDetails.accountNumber &&
      payoneerDetails.routingNumber &&
      payoneerDetails.accountHolderName
    ) {
      onPayoneerPayment(payoneerDetails);
    } else {
      alert("Please fill in all Payoneer details.");
    }
  };

  return (
    <div className="">
      <h3>Payoneer Payment</h3>
      <div className="payoneer-form">
        <label>Account Number:</label>
        <input
          type="text"
          name="accountNumber"
          value={payoneerDetails.accountNumber}
          onChange={handlePayoneerChange}
        />

        <label>Routing Number:</label>
        <input
          type="text"
          name="routingNumber"
          value={payoneerDetails.routingNumber}
          onChange={handlePayoneerChange}
        />

        <label>Account Holder Name:</label>
        <input
          type="text"
          name="accountHolderName"
          value={payoneerDetails.accountHolderName}
          onChange={handlePayoneerChange}
        />
      </div>
      <button className="pay-button" onClick={handlePayoneerPayment}>
        Pay with Payoneer
      </button>
    </div>
  );
}
