import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "./Contact.css";
import { useState } from "react";
import Swal from 'sweetalert2'

export function validation(values) {
  let errors = {};

  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (values.name.length < 3) {
    errors.name = 'The name must contain a minimum of 3 characters';
  }
  if (values.name.length > 40) {
    errors.name = 'The name must contain a maximum of 40 characters';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }
  if (values.email.length > 50) {
    errors.name = 'The email must contain a maximum of 50 characters';
  }
  if (!values.message) {
    errors.message = 'Message is required';
  } else if (values.message.length < 5) {
    errors.message = 'Message needs to be 5 characters or more';
  }
  else if (values.message.length > 500) {
    errors.message = 'The message must contain a maximum of 500 characters';
  }

  return errors;
}

function Contact() {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: "Name is required",
    email: "Email is invalid",
    message: "Message is required"
  })

  function onSubmitForm(e) {
    e.preventDefault();
  }

  function onHandleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
    setErrors(
      validation({
        ...state,
        [e.target.name]: e.target.value
      })
    )
  }

  //Mensaje de alerta del mensaje
  const envioDeMsj = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'The message has been sent successfully',
      showConfirmButton: false,
      timer: 1500
    })
    setState({
      name: '',
      email: '',
      message: '',
    });
  }

  const btnCancel = () => {
    setState({
      name: '',
      email: '',
      message: '',
    });
  }

  return (
    <>
      <div className="bg-contact col-12">
        <Form className="formcon col-12" onSubmit={(e) => onSubmitForm(e)}>
          <section class="form">
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
                    value={state.email} onChange={(e) => onHandleChange(e)} />
                  <label for="email" class="label">
                    Email
                  </label>
                  <div id="errors" class="errors"> {errors.email && <p>{errors.email}</p>} </div>
                </div>
                <div class="form-field col-lg-12">
                  <label for="message" class="label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    class="input-text"
                    name="message"
                    value={state.message} as="textarea" placeholder="Leave a comment here" onChange={(e) => onHandleChange(e)}
                  ></textarea>
                  {/* <input
                    id="message"
                    class="input-text"
                    type="text"
                    name="message"
                    value={state.message} as="textarea" placeholder="Leave a comment here" onChange={(e) => onHandleChange(e)}
                  /> */}
                  <div id="errors" class="errors"> {errors.message && <p>{errors.message}</p>} </div>
                </div>

                <div className="row">
                  <div class="form-field col-lg-6 align-content-center">
                    <input
                      class="submit-btn"
                      type="submit"
                      value="Send"
                      name=""
                      disabled={errors.name || errors.email || errors.message ? true : false}
                      onClick={envioDeMsj}
                    ></input>
                  </div>
                  <div class="form-field col-lg-6">
                    <input
                      class="cancel-btn"
                      type="reset"
                      value="Cancel"
                      name=""
                      onClick={btnCancel}
                    ></input>
                  </div>
                </div>


              </div>
            </div>
          </section>
        </Form>
      </div>
    </>
  );
};
export default Contact;