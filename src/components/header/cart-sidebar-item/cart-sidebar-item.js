import React from "react";
import {Link} from "react-router-dom";
import publicPath from "../../../utils/public-image";

const CartSidebarItem = ({product}) => {
  const  {title, image, cost, id, count} = product
  return (
    <div className="row cart__row">
      <div className="col-4">
        <img alt="product" src={image}/>
      </div>
      <div className="col-8 align-content-between d-flex justify-content-around flex-column">
        <div className="row">
          <div className="col-10">
            <Link to='/'>{title}</Link>
          </div>
          <div className="col-1">
            <img className="close__product" src={publicPath('/img/close.svg')} alt="close"/>
          </div>
        </div>
        <div className="row">
          <div className="col-6 count__sidebar">
            <p>
              <img alt="minus" className="control__sidebar left" src={publicPath('/img/minus.svg')}/>
              <span>{count} шт</span>
              <img alt="plus" className="control__sidebar right" src={publicPath('/img/more.svg')}/>
            </p>
          </div>
          <div className="col-6">
            <p className="float-right">{cost}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartSidebarItem