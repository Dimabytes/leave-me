import React from "react";
import './no-match.scss'

const noMatch = () => {
  return (
    <div className="not-found-alert">
      <h1 className="alert alert-warning">Не найдено. Ты официально Leave Me.</h1>
    </div>
  )
}

export default noMatch