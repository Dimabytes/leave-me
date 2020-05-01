import React from "react";
import CheckoutForm from "./checkout-form";

const CheckoutPage = () => {
return (
  <main className="product-page">
    <div className="container-xl">
      <div className="row justify-content-md-center">
        <div className="col-md-8 order-md-1">
          <CheckoutForm/>
        </div>
      </div>
    </div>
  </main>
)
}

export default CheckoutPage