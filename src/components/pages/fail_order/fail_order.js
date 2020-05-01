import React from "react";
import {useHistory} from "react-router-dom";

const FailOrder = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push("/");
  }, 3000)
  return (
    <main className="success-order">
      <div className="container-xl simple-page-container">
          <div className="col-md-12 simple-page-column rounded-lg p-3 needs-validation bg-danger">
            Упс! Что то пошло не так :( <br/>
            Вы будете перенаправлены на главную страницу через 3 секунды...
          </div>
      </div>
    </main>
  )
}

export default FailOrder