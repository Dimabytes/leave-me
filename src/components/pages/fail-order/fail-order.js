import React from "react";
import {useHistory} from "react-router-dom";
import SimplePage from "../simple-page";

const FailOrder = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push("/");
  }, 3000)
  return (
    <SimplePage pageClass="fail-order" containerClasses="bg-danger">
        Упс! Что то пошло не так :( <br/>
        Вы будете перенаправлены на главную страницу через 3 секунды...
    </SimplePage>
  )
}

export default FailOrder