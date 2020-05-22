import React from "react";
import SingleProduct from "./single-product";

const ProductPage = ({itemSlug}) => {
    return (
      <main className="product-page">
        <div className="container-lg d-flex justify-content-center product__container">
          <SingleProduct itemSlug={itemSlug}/>
        </div>
      </main>
    )
}

export default ProductPage
