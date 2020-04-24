import React from "react";
import './error-indicator.scss'

const ErrorIndicator = () => {
  return (
    <div className="error-alert">
      <h1 className="alert alert-danger">Ошибка! Что то пошло не так!</h1>
    </div>
  )
}

export default ErrorIndicator