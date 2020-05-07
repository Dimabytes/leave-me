import React from "react";
import SingleProduct from "./single-product";

const ProductPage = ({itemId}) => {
    return (
      <main className="product-page">
        <div className="container-lg d-flex justify-content-center product__container">
          <SingleProduct itemId={itemId}/>
        </div>
      </main>
    )
}

export default ProductPage
