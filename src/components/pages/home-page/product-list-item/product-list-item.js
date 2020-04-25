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
    const  {id, images} = this.props.product
    return (
      <Link to={`/product/${id}`} className="col-lg-4 col-6 product-card">
        <Slider ref={c => (this.slider = c)} {...settings} className="card-title">
          {
            images.map((image, idx) => <img
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
}

export default ProductListItem