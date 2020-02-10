const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateGroupInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.organizer = !isEmpty(data.organizer) ? data.organizer : "";
  data.gameTitle = !isEmpty(data.gameTitle) ? data.gameTitle : "";
  data.location = !isEmpty(data.location) ? data.location : "";
  data.gameType = !isEmpty(data.gameType) ? data.gameType : "";

  // organizer check
  if (Validator.isEmpty(data.organizer)) {
    errors.organizer = "Organizer field is required";
  }

  // gameTitle check
  if (Validator.isEmpty(data.gameTitle)) {
    errors.password = "Game Title field is required";
  }

  // location check
  if (Validator.isEmpty(data.location)) {
    errors.location = "Location field is required";
  }

  // gameType check
  if (Validator.isEmpty(data.gameType)) {
    errors.gameType = "Game Type field is required"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
