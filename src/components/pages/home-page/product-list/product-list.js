import React from "react";
import ProductListItem from "../product-list-item";

const ProductList = ({products}) => {
  return (
    <div className="container-xl products-grid">
      <div className="row align-items-center justify-content-center">
        {
          products.map((product) => {
            return (
              <ProductListItem key={product.id} product={product}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductList