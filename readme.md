<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
</head>

<body>
  <div>
    <h1>Card Payment Page</h1>
    <p>
      This is a React component that provides a simple card payment page with options to pay using Stripe, PayPal, or
      Payoneer. The component allows users to enter the payment amount and choose their preferred payment method. Let's
      see how to use this component and what each payment method offers:
    </p>
  </div>

  <div>
    <h2>Installation and Setup</h2>
    <ol>
      <li>Ensure you have React and Node.js installed in your project.</li>
      <li>Copy the <code>component folder</code> to your <code>project</code> directory.</li>
      <li>Install the required dependencies:</li>
    </ol>
    <pre><code>npm install stripe react-stripe-checkout react-paypal-express-checkout --legacy-peer-deps</code></pre>
    <p>Import the component and its associated CSS file:</p>
    <pre><code>
import React from "react";
import CardPaymentPage from "./components/CardPaymentPage";
    </code></pre>
  </div>

  <div>
    <h2>Usage</h2>
    <p>Render the <code>CardPaymentPage</code> component within your React application:</p>
    <pre><code>
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
  </div>

  <div>
    <h2>Payment Methods</h2>
    <ol>
      <li>
        <strong>Stripe Payment</strong>
        <p>
          With Stripe, users can make secure payments using their credit/debit cards. The payment amount is processed
          through the Stripe API. To use Stripe payment:
        </p>
        <ul>
          <li>Obtain your Stripe public key and replace <code>//your public key here</code> with it in the
            <code>StripeCheckout</code> component within <code>renderPaymentForm()</code>.</li>
          <li>Ensure your backend handles the token received from Stripe to process the payment securely.</li>
        </ul>
      </li>
      <li>
        <strong>PayPal Payment</strong>
        <p>
          PayPal provides an option for users to make payments using their PayPal account or credit/debit card. The
          payment amount is processed through the PayPal API. To use PayPal payment:
        </p>
        <ul>
          <li>Update the <code>client</code> object with your PayPal sandbox and production client IDs in the
            <code>PayPalButton</code> component within <code>renderPaymentForm()</code>.</li>
        </ul>
      </li>
      <li>
        <strong>Payoneer Payment</strong>
        <p>
          Payoneer payment option allows users to enter their Payoneer account details for payment. Note that server-side
          integration is required for Payoneer payments, as the Payoneer API doesn't support client-side processing.
        </p>
      </li>
    </ol>
  </div>

  <div>
    <h2>Handling Payments</h2>
    <ul>
      <li>
        <strong>Stripe Payment:</strong>
        <p>The <code>handleStripeToken</code> function logs the Stripe token. Make sure to send this token to your backend
          for further processing.</p>
      </li>
      <li>
        <strong>PayPal Payment:</strong>
        <p>The <code>handlePayPalSuccess</code> function logs the successful PayPal payment response, and
          <code>handlePayPalError</code> handles any payment errors.</p>
      </li>
      <li>
        <strong>Payoneer Payment:</strong>
        <p>The <code>handlePayoneerPayment</code> function logs the Payoneer payment details. Implement server-side
          integration for secure payment processing.</p>
      </li>
    </ul>
  </div>

  <div>
    <h2>Styling</h2>
    <p>
      The component uses basic CSS styles provided in the <code>CardPaymentPage.css</code> file. You can customize the
      styles to match your application's design.
    </p>
  </div>

  <div>
    <p>Feel free to modify and extend this component to suit your specific payment needs. Happy coding!</p>
    <p>Contact: wahabmazhar60@gmail.com</p>
  </div>
</body>

</html>
