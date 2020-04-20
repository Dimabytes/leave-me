import React, {Fragment} from "react";

const ProductListItem = ({product}) => {
  const  {title} = product
  return (
    <Fragment>
      <span>{title}</span>
    </Fragment>
  )
}

export default ProductListItem