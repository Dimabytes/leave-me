import React from "react";
import Slider from "react-slick";
import '../../../app/style/slick.css'
import {ReactComponent as NextSvg} from './img/next.svg'
import {ReactComponent as PrevSvg} from './img/prev.svg'
import './single-product.scss'

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <NextSvg onClick={onClick} className={'nav__slider slider__nav-left'}/>
  );
}

function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <PrevSvg alt={'next'} onClick={onClick} className={'nav__slider slider__nav-right'}/>
  );
}

const SingleProduct =  ({product, product: {cost, title, images, sizes, description, structure, sizes_image},
                          onAddedToCart, onChangeSize, cartItems}) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  };
  return (
    <div className="row singe-product">
    <div className="col-lg-7 col-md-7 col-12 images__product">
      <Slider {...settings} className="card-title">
        {
          images.map((image, idx) => <img
            className="singe-product__slider-image"
            key={idx}
            alt=''
            src={image}/>)
        }
      </Slider>
    </div>
    <div className="offset-md-1 col-md-4 col-12 rounded info__product">
      <div className="row">
        <h1 className="header__product">{title}</h1>
      </div>
      <div className="row">
        <h3 className="cost__product">{cost} RUB</h3>
      </div>
      <div className="row controls__product">
        <div className="col6">
          <div className="form-group">
            <select onChange={(event) => onChangeSize(event.target.value)} className="form-control select__product">
              {
                sizes.map((size, idx) => <option key={idx}>{size}</option>)
              }
            </select>
          </div>
        </div>
        <div className="col6">
          <div className="btn btn-primary btn-product" onClick={() => {
            onAddedToCart(cartItems, product);
          }}>В корзину</div>
        </div>
      </div>
      <p className="row text__product">{description}</p>
      <p className="row text__product">{structure}</p>
      <div className="mb-3"/>
      <div className="row">
        <a className="link__product" href={sizes_image}>Таблица размеров</a>
      </div>
    </div>
  </div>)
}

export default SingleProduct