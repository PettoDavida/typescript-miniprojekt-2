import "../CSS/payment.css";

function PaymentMethod() {
  return (
    <div className="payment-div">
      <div className="choose-payment">
        <h2>Välj betalningsätt!</h2>
      </div>

      <div className="payment-swish">
        <p>Swish</p>

        <img src="images/Swish.png" className="swish-logo" alt="" />
      </div>

      <div className="payment-betalkort">
        <p>Betalkort</p>

        <img src="images/Mastercard.png" className="betalkort-logo" alt="" />
      </div>
      <div className="payment-paypal">
        <p>Paypal</p>

        <img src="images/Paypal.png" className="paypal-logo" alt="" />
      </div>
    </div>
  );
}

export default PaymentMethod;
