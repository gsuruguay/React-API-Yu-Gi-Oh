import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "./Contact.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export  function validation(values) {
  let errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }
  
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }
  if (!values.message) {
    errors.message = 'Message is required';
  } else if (values.message.length < 5 ) {
    errors.message = 'Message needs to be 5 characters or more';
  }

  return errors;
}
function Contact(){
  const [state, setState] = useState({
    name:'',
    email:'',
    message: '',
});
const [errors, setErrors] = useState({
  name: "Name is required",
  email: "Email is invalid",
  message:"Message is required"
  }) 

  function onSubmitForm(e) {
    e.preventDefault();
    alert("Sus respuestas se ha registrado");
} 

function onHandleChange(e){
    setState({
        ...state,
        [e.target.name]: e.target.value
    })
    setErrors(
    validation({
      ...state,
      [e.target.name] : e.target.value
    })
    )
     }

  return (
    <>
      <Form onSubmit={(e)=>onSubmitForm(e)}>
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
                  placeholder="Enter your name"
                  value={state.name}
                  onChange={(e) => onHandleChange(e)}  
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
                  value={state.email} onChange={(e) => onHandleChange(e)}  />
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
                  value={state.message}  as="textarea"placeholder="Leave a comment here"onChange={(e)=>onHandleChange(e)}
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
                  disabled={ errors.name || errors.email ||errors.message ? true : false }
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