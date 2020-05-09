import React from "react";
import { useHistory } from 'react-router-dom';
import SimplePage from "../simple-page";

const SuccessOrder = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push("/");
  }, 5000)
  return (
    <SimplePage pageClass="success-order">
            Мы получили ваш заказ, спасибо! Скоро с вами свяжутся для подтверждения.<br/>
            Вы будете перенаправлены на главную страницу через 5 секунд...
    </SimplePage>
  )
}

export default SuccessOrder