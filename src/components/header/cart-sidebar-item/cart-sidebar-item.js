import React from "react";
import {Link} from "react-router-dom";
import publicPath from "../../../utils/public-image";

const CartSidebarItem = ({product, onIncrease, onDecrease, onDelete, cartItems, checkRequested}) => {
  const  {title, image, total, id, count, size} = product
  const IncreaseBtn = (
    <img alt="plus"
         className="control__sidebar right"
         src={publicPath('/img/more.svg')}
         onClick={() => {
           if(!checkRequested)
             onIncrease(id, size, cartItems)
         }} />
         )

  const DecreaseBtn = (
    <img alt="minus"
         className="control__sidebar left"
         src={publicPath('/img/minus.svg')}
         onClick={() => {
           if(!checkRequested)
            onDecrease(id, size)
         }}
    />
  )
  return (
    <div className="row cart__row">
      <div className="col-4">
        <img alt="product" src={image}/>
      </div>
      <div className="col-8 align-content-between d-flex justify-content-around flex-column">
        <div className="row">
          <div className="col-10">
            <Link to={`/product/${id}`}>{title} - {size}</Link>
          </div>
          <div className="col-1">
            <img className="close__product" onClick={() => onDelete(id, size)} src={publicPath('/img/close.svg')} alt="close"/>
          </div>
        </div>

        <div className="row">
          <div className="col-6 count__sidebar">
            <p>
              {DecreaseBtn}
              <span>{count} шт</span>
              {IncreaseBtn}
            </p>
          </div>
          <div className="col-6">
            <p className="float-right">{total} RUB</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartSidebarItem