// src/components/CardPaymentPage.js
import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import PayPalButton from "./PayPalButton";
import "./CardPaymentPage.css";
import Payoneer from "./Payoneer";

const CardPaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [amount, setAmount] = useState(0);

  const handleStripeToken = (token) => {
    // Send the token to your backend for processing the payment with Stripe.
    console.log(token);
  };

  const handlePayPalSuccess = (payment) => {
    // Handle successful PayPal payment.
    console.log(payment);
  };

  const handlePayPalError = (error) => {
    // Handle PayPal payment error.
    console.error(error);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePayoneerPayment = (details) => {
    // Handle Payoneer payment processing here using 'details'
    console.log("Payoneer Payment Details:", details);
    //call the rest api against it
  };

  const renderPaymentForm = () => {
    if (paymentMethod === "stripe") {
      return (
        <div>
          <h3>Stripe Payment</h3>
          <StripeCheckout
            token={handleStripeToken}
            stripeKey="//your public key here"
            amount={amount * 100} // Amount in cents (e.g., 1000 cents = $10), that's why multiplied by 100 to convert cents to dollars
            currency="USD"
          >
            <button className="pay-button">Pay with Stripe</button>
          </StripeCheckout>
        </div>
      );
    } else if (paymentMethod === "paypal") {
      return (
        <div>
          <h3>PayPal Payment</h3>
          <PayPalButton
            onSuccess={handlePayPalSuccess}
            onError={handlePayPalError}
            amount={amount} // Amount in dollars (e.g., $10)
            currency="USD"
            env="sandbox" // Change to "production" for live environment
            client={{
              sandbox: "test",
              production: "test",
            }}
          />
        </div>
      );
    } else if (paymentMethod === "payoneer") {
      return <Payoneer onPayoneerPayment={handlePayoneerPayment} />;
    }
  };

  return (
    <div className="card-payment-container">
      <div className="payment-form">
        <label>Enter amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label>Choose Payment Method:</label>
        <select value={paymentMethod} onChange={handlePaymentMethodChange}>
          <option value="stripe">Stripe</option>
          <option value="paypal">PayPal</option>
          <option value="payoneer">Payoneer</option>
        </select>
      </div>
      {renderPaymentForm()}
    </div>
  );
};

export default CardPaymentPage;
