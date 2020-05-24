import React, {Component} from "react";
import {Link} from "react-router-dom";
import './product-list-item.scss'
import '../../../app/style/slick.css'
import Slider from "react-slick"
class ProductListItem extends Component{
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  prev() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      arrows: false,
      accessibility: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 0,
      fade: true,
      cssEase: 'linear'
    };
    const  {product, product: {slug, preview_images}} = this.props
    if(product.sizes.length > 0){
      return (
        <Link to={`/product/${slug}`} className="col-lg-4 col-6 product-card">
          <Slider ref={c => (this.slider = c)} {...settings} className="card-title">
            {
              preview_images.slice(0, 2).map((image, idx) => <img
                onMouseOver={this.next}
                onMouseOut={this.prev}
                key={idx}
                alt=''
                src={image}/>)
            }
          </Slider>
        </Link>
      )
    }

    return (
      <div className="col-lg-4 col-6 product-card out-of-stock">
        <Slider ref={c => (this.slider = c)} {...settings}>
          {
            preview_images.slice(0, 2).map((image, idx) => <img
              onMouseOver={this.next}
              onMouseOut={this.prev}
              key={idx}
              alt=''
              src={image}/>)
          }
        </Slider>
      </div>
    )


  }
}

export default ProductListItem