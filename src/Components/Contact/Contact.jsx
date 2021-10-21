import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "./Contact.css";
import { useState } from "react";
import Validation from "./Validation";
import validateInfo from "./ValidateInfo";
import { NavLink } from "react-router-dom";

const Contact = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = Validation(
    submitForm,
    validateInfo
  );
  return (
    <>
      <Form onSubmit={handleSubmit} className="form " noValidate>
        <section class="get_in_touch">
          <h1 class="title"> CONTACT US</h1>
          <div class="container">
            <div class="contact-form row">
              <div class="form-field col-lg-6">
                <input
                  id="name"
                  class="input-text"
                  type="text required"
                  name="name"
                  placeholder="Enter your username"
                  value={values.username}
                  onChange={handleChange}
                />
                <label for="name" class="label">
                  Full Name
                </label>
                <div id="errors" class="errors">{errors.name && <p>{errors.name}</p>}</div>
              </div>

              <div class="form-field col-lg-6">
                <input
                  id="email"
                  class="input-text"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                />
                <label for="email" class="label">
                  Email
                </label>
                <div id="errors" class="errors"> {errors.email && <p>{errors.email}</p>} </div>
              </div>

              <div class="form-field col-lg-12">
                <input
                  id="message"
                  class="input-text"
                  type="text"
                  name="message"
                  placeholder="Enter a message"
                  value={values.message}
                  onChange={handleChange}
                />
                <label for="message" class="label">
                  Message
                </label>
                <div  id="errors" class="errors"> {errors.message && <p>{errors.message}</p>} </div>
              </div>

              <div class="form-field col-lg-6 align-content-center">
                <input
                  class="submit-btn"
                  type="submit"
                  value="Send"
                  name=""
                ></input>
                  {/*<NavLink className="submit-btn" to="/home">Send</NavLink>*/}
              </div>

              <div class="form-field col-lg-6">
                <input
                  class="submit-btn"
                  type="submit"
                  value="Cancel"
                  name=""
                ></input>
                  {/*<NavLink className="submit-btn" to="/home">Send</NavLink>*/}
              </div>
              <div>
        </div>
            </div>
          </div>
        </section>
      </Form>
    </>
  );
};
export default Contact;