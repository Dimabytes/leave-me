import React from "react";
import {useHistory} from "react-router-dom";
import SimplePage from "../simple-page";

const FailOrder = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push("/");
  }, 5000)
  return (
    <SimplePage pageClass="fail-order" containerClasses="bg-danger">
        К сожалению, товара больше нет в наличии :(<br/>
        Вы будете перенаправлены на главную страницу через 5 секунд...
    </SimplePage>
  )
}

export default FailOrder