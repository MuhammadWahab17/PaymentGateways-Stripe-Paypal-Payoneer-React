// src/components/PayPalButton.js
import React from "react";
import PayPalExpressBtn from "react-paypal-express-checkout";

const PayPalButton = ({
  onSuccess,
  onError,
  amount,
  currency,
  env,
  client,
}) => {
  const onSuccessPayment = (payment) => {
    onSuccess(payment);
  };

  const onErrorPayment = (error) => {
    onError(error);
  };

  const paypalStyle = {
    size: "medium",
    color: "blue",
    shape: "rect",
    label: "checkout",
  };

  return (
    <PayPalExpressBtn
      env={env}
      client={client}
      currency={currency}
      total={amount}
      onError={onErrorPayment}
      onSuccess={onSuccessPayment}
      onCancel={() => console.log("Payment cancelled")}
      style={paypalStyle}
    />
  );
};

export default PayPalButton;
