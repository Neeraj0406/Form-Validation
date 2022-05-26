import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import ErrorMsg from "./ErrorMsg";
import "./app.css";

const validationSchema = yup.object().shape({
  name: yup.string().required("please enter your name"),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "your password must have minimum eight characters, at least one letter, one number and one special character:"
    )
    .required("password enter password"),

  description: yup
    .string()
    .max(50, "please describe yourself in not more than 50 words")
    .required("description is required"),
  email: yup.string().email().required("please enter your email address"),
  title: yup.string().required("please select something"),
  gender: yup.string().required("please select one"),
  hobbies: yup.array().min(1).of(yup.string().required()).required(),
  acceptTerms: yup
    .boolean()
    .oneOf([true], "please accept terms and conditions"),
});

const App = () => {
  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: "",
          password: "",
          description: "",
          email: "",
          title: "",
          gender: "",
          hobbies: [],
          acceptTerms: false,
        }}
        onSubmit={(values) => {
          alert("form submitted");
          console.log(values);
        }}
      >
        <Form className="form_container">
          <h1> FORM NO 2</h1>
          <div className="form_wrapper">
            <div className="label">
              <label htmlFor="name">NAME </label>
            </div>
            <div className="form_input">
              <Field name="name" type="text" id="name" />
              <ErrorMsg name="name" />
            </div>
          </div>
          <div className="form_wrapper">
            <div className="label">
              <label htmlFor="password">Password :</label>
            </div>
            <div className="form_input">
              <Field name="password" id="password" type="password" />
              <ErrorMsg name="password" />
            </div>
          </div>
          <div className="form_wrapper">
            <div className="label">
              <label htmlFor="desc">Description :</label>
            </div>
            <div className="form_input">
              <Field name="description" type="text" id="desc" />
              <ErrorMsg name="description" />
            </div>
          </div>
          <div className="form_wrapper">
            <div className="label">
              <label htmlFor="email">Email :</label>
            </div>
            <div className="form_input">
              <Field name="email" type="email" id="email" />
              <ErrorMsg name="email" />
            </div>
          </div>
          <div className="form_wrapper">
            <div className="label">
              <label htmlFor="title">Title :</label>
            </div>
            <div className="form_input">
              <Field name="title" type="text" id="title" />
              <ErrorMsg name="title" />
            </div>
          </div>
          <div className="form_wrapper">
            <div className="label">
              <label>Gender :</label>
            </div>
            <div className="form_input">
              <div>
                <Field name="gender" value="male" type="radio" id="male" />
                <label htmlFor="male"> Male :</label>
                <Field name="gender" type="radio" value="female" id="female" />
                <label htmlFor="female">Female :</label>
              </div>

              <ErrorMsg name="gender" />
            </div>
          </div>
          <div className="form_wrapper">
            <div className="label">
              <label>Hobbies</label>
            </div>
            <div className="form_input">
              <div>
                <Field
                  type="checkbox"
                  value="cycling"
                  name="hobbies"
                  id="cycling"
                />
                <label htmlFor="cycling"> Cycling</label>
                <Field
                  type="checkbox"
                  value="dancing"
                  name="hobbies"
                  id="dancing"
                />
                <label htmlFor="dancing"> Dancing</label>
                <Field
                  type="checkbox"
                  value="traveling"
                  name="hobbies"
                  id="traveling"
                />
                <label htmlFor="traveling"> Traveling</label>
              </div>
              <ErrorMsg name="hobbies" />
            </div>
          </div>
          <div>
            <Field type="checkbox" name="acceptTerms" id="accept" />
            <label htmlFor="accept">ACCEPT TERMS AND CONDITIONS</label>
            <div>
              <ErrorMsg name="acceptTerms" />
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default App;
