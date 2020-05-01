import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './chekout-form.scss'

const FieldError = ({error}) => {
  return <div className="invalid-feedback d-block">{error}</div>
}

const CheckoutForm = () => {
  return (
    <Formik
      initialValues={{ name: '', surname: '', address: '', phone: "", zip: "", email: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required(<FieldError error="Обязательно"/>),
        surname: Yup.string()
          .required(<FieldError error="Обязательно"/>),
        address: Yup.string()
          .required(<FieldError error="Обязательно"/>),
        phone: Yup.string()
          .required(<FieldError error="Обязательно"/>),
        zip: Yup.string()
          .required(<FieldError error="Обязательно"/>),
        email: Yup.string()
          .email(<FieldError error="Некорректный E-mail"/>)
          .required(<FieldError error="Обязательно"/>),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="checkout-form rounded-lg p-3 needs-validation">
        <h1 className="mb-3 main-header">Доставка</h1>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="name">Имя</label>
            <Field className="form-control" name="name" type="text"/>
            <ErrorMessage name="name"/>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="surname">Фамилия</label>
            <Field className="form-control"  name="surname" type="text"/>
            <ErrorMessage name="surname"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <label htmlFor="address">Адрес</label>
            <Field className="form-control" name="address" type="text"/>
            <ErrorMessage name="address"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="zip">Индекс</label>
            <Field className="form-control" name="zip" type="text"/>
            <ErrorMessage name="zip"/>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="phone">Телефон</label>
            <Field className="form-control" name="phone" type="text"/>
            <ErrorMessage name="phone"/>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="email">E-mail</label>
            <Field className="form-control" name="email" type="text"/>
            <ErrorMessage name="email"/>
          </div>
        </div>
        <small className="form-text text-muted">Пока что мы доставляем только по Санкт-Петербургу.</small>
        <div className="mb-3"/>
        <button className="btn btn-primary btn-lg btn-block" type="submit">Заказать</button>
      </Form>
    </Formik>
  );
};

export default CheckoutForm
