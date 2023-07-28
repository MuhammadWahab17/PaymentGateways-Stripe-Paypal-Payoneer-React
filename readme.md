<!DOCTYPE html>
<html lang="en">

<head>
   
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header>
    <h1>Card Payment Page</h1>
    <p>A React component for processing card payments with Stripe, PayPal, and Payoneer</p>
  </header>

  <main>
    
      <h2>About</h2>
      <p>
        This is a React component that provides a simple card payment page with options to pay using Stripe,
        PayPal, or Payoneer. Users can enter the payment amount and choose their preferred payment method.
      </p>
    

    
      <h2>Installation</h2>
      <pre><code>
npm install react-stripe-checkout react-paypal-express-checkout
      </code></pre>
      <p>Copy the <code>CardPaymentPage.js</code> file to your <code>src/components</code> directory and import it
        into your project.</p>
    

    <section>
      <h2>Usage</h2>
      <pre><code>
import React from "react";
import CardPaymentPage from "./components/CardPaymentPage";
import "./CardPaymentPage.css";

function App() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Welcome to My Payment App&lt;/h1&gt;
      &lt;CardPaymentPage /&gt;
    &lt;/div&gt;
  );
}

export default App;
      </code></pre>
    </section>

    <section>
      <h2>Payment Methods</h2>
      <p>Choose from the following payment methods:</p>
      <ul>
        <li>Stripe Payment: Secure card payments using Stripe.</li>
        <li>PayPal Payment: Payments through PayPal accounts or credit/debit cards.</li>
        <li>Payoneer Payment: Enter Payoneer account details for payment.</li>
      </ul>
    </section>

    <section>
      <h2>Handling Payments</h2>
      <p>
        The component provides respective functions to handle payments:
      </p>
      <pre><code>
// Stripe Payment
const handleStripeToken = (token) => {
  // Send the token to your backend for processing the payment with Stripe.
  console.log(token);
};

// PayPal Payment
const handlePayPalSuccess = (payment) => {
  // Handle successful PayPal payment.
  console.log(payment);
};

const handlePayPalError = (error) => {
  // Handle PayPal payment error.
  console.error(error);
};

// Payoneer Payment
const handlePayoneerPayment = (details) => {
  // Handle Payoneer payment processing here using 'details'
  console.log("Payoneer Payment Details:", details);
  // Call the rest API against it
};
      </code></pre>
    </section>

    <section>
      <h2>Styling</h2>
      <p>
        The component uses basic CSS styles provided in the <code>CardPaymentPage.css</code> file. You can customize
        the styles to match your application's design.
      </p>
    </section>

  </main>

  <footer>
    <p>Contact: your.email@example.com</p>
  </footer>

</body>

</html>
