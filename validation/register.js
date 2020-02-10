const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  const name = !isEmpty(data.name) ? data.name : "";
  const email = !isEmpty(data.email) ? data.email : "";
  const password = !isEmpty(data.password) ? data.password : "";
  const password2 = !isEmpty(data.password2) ? data.password2 : "";
  const age = !isEmpty(data.age) ? toString(data.age) : "";
  const gender = !isEmpty(data.gender) ? data.gender : "";

  // Name checks
  if (Validator.isEmpty(name)) {
    errors.name = "Name field is required";
  }

  // Email checks
  if (Validator.isEmpty(email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(email)) {
    errors.email = "Email is invalid";
  }

  // Password checks
  if (Validator.isEmpty(password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(password2)) {
    errors.password2 = "Confirm password field is required";
  }

  if (!Validator.isLength(password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!Validator.equals(password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  // Age check
  if (Validator.isEmpty(age)) {
    errors.age = "Age field is required";
  }

  // Gender check
  if (Validator.isEmpty(gender)) {
    errors.gender = "Gender field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
