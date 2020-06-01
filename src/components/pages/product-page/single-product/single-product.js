import React, {Fragment} from "react";
import Slider from "react-slick";
import '../../../app/style/slick.css'
import './single-product.scss'
import publicPath from "../../../../utils/public-image";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <img alt="next arrow" src={publicPath('/img/next.svg')}  onClick={onClick} className={'nav__slider slider__nav-left'}/>
  );
}

function SamplePrevArrow(props) {
  const {onClick } = props;
  return (
    <img alt="prev arrow" src={publicPath('/img/prev.svg')} onClick={onClick} className={'nav__slider slider__nav-right'}/>
  );
}

const SingleProduct =  ({product: {cost, title, images, sizes, description, structure, sizes_image},
                          addToCartBtn, onChangeSize}) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  };

  function SizesTable (){
    if(sizes_image){
      return (
        <Fragment>
          <div className="mb-3"/>
          <div className="row">
            <a className="link__product" href={sizes_image}>Таблица размеров</a>
          </div>
        </Fragment>
      );
    }
    return null;
  }

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
    <div className="offset-md-1 col-md-4 col-12 mt-5 rounded info__product">
      <div className="row">
        <h1 className="header__product">{title}</h1>
      </div>

      <div className="row">
        <h3 className="cost__product">{cost} RUB</h3>
      </div>
      <div className="row controls__product">
        <div className="col6">
          <div className="form-group">
            <select onChange={
              (event) => onChangeSize(sizes.find(size => size.id === Number.parseInt(event.target.value)))} className="form-control select__product">
              {
                sizes.map((size, idx) => <option value={size.id} key={idx}>{size.size} {size.isLast ? "(1 шт.)" : ''}</option>)
              }
            </select>
          </div>
        </div>
        <div className="col6">
          {addToCartBtn}
        </div>
      </div>
      <p className="row text__product">{description}</p>
      <p className="row text__product">{structure}</p>
      <SizesTable/>

    </div>
  </div>)
}

export default SingleProduct