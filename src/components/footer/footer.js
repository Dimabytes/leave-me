import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as VkSvg} from './img/vk.svg'
import {ReactComponent as InstSvg} from './img/instagram.svg'
import './footer.scss'

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="d-flex flex-row justify-content-center align-items-baseline">
        <div className="p-2 d-flex justify-content-end w-7r">
          <Link className="link__footer" to="#">Policy</Link>
        </div>
        <div className="p-2 d-flex justify-content-center w-7r">
          <p className="text__footer">Follow us</p>
        </div>
        <div className="p-2 links__footer d-flex justify-content-start w-7r">
          <Link to="#" className="link__footer link__vk"><VkSvg className="img__footer"/></Link>
          <Link to="#" className="link__footer link__insta"><InstSvg className="img__footer"/></Link>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <div className="p-2">
          <p className="text__footer">&#169;Leave me 2020</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer