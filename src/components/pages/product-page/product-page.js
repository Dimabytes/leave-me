import React, {Component} from "react";
import Spinner from "../../spinner";
import ErrorIndicator from "../../error-indicator";
import Slider from "react-slick"
import '../../app/style/slick.css'
import withShopService from "../../hoc";
import {fetchProduct} from "../../../actions";
import {compose} from "redux";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import './product-page.scss'
import {productAddedToCart} from "../../../actions";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const ProductPage = ({product: {cost, title, images, sizes, description, structure, id}, onAddedToCart}) =>{
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
    return (
      <main className="product-page">
        <div className="container-lg d-flex justify-content-center product__container">
          <div className="row singe-product">
            <div className="col-lg-7 col-md-7 col-12 images__product">
            <Slider {...settings} className="card-title">
              {
                images.map((image, idx) => <img
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
                    <select className="form-control select__product">
                      {
                        sizes.map((size, idx) => <option key={idx}>{size}</option>)
                      }
                    </select>
                  </div>
                </div>
                <div className="col6">
                  <div className="btn btn-primary btn-product" onClick={onAddedToCart}>В корзину</div>
                </div>
              </div>
              <p className="row text__product">{description}</p>
              <p className="row text__product">{structure}</p>
              <div className="row">
                <Link className="link__product" to="#">Таблица размеров</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

class ProductPageContainer extends Component{
  componentWillMount() {
    this.props.fetchProduct(this.props.itemId)
  }

  render() {
    const {product, loading, error, onAddedToCart} = this.props
    if(error){
      return <ErrorIndicator/>
    }
    if(loading || !product){
      return <Spinner/>
    }
    if(product)
      return <ProductPage product={product} onAddedToCart={onAddedToCart}/>
  }
}

const mapStateToProps = ({product, loading, error}) => {
  return {product, loading, error}
}

const mapDispatchToProps = (dispatch, {shopService}) => {
  return{
    fetchProduct: fetchProduct(shopService, dispatch),
    onAddedToCart: () => dispatch(productAddedToCart()),
  }
}

export default compose(withShopService(),connect(mapStateToProps, mapDispatchToProps
))(ProductPageContainer)