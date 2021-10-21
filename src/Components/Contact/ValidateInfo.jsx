import React from "react";
export default function validateInfo(values) {
    let errors = {};

    if (!values.name.trim()) {
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