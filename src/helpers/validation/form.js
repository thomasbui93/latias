export const validationPatterns = {
  email: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
  password: /^\w{8,}$/,
  required: /^\w{1,}$/,
};

export const validate = (value, pattern, callback) => {
  if (!value) {
    return false;
  }
  if (typeof pattern !== 'string') {
    return pattern.test(value);
  }
  if (callback) {
    return callback(value);
  }
  if (typeof validationPatterns[pattern] !== 'undefined') {
    return new RegExp(validationPatterns[pattern]).test(value);
  }

  throw Error(`Pattern ${pattern} is not defined. Please add a regular expression for it.`);
};

export const validateFormData = (form) => {
  let isValid = true;
  form.fields.forEach((field) => {
    const callback = { field };
    if (typeof callback === 'undefined') {
      field.isValid = validate(field.value, field.pattern);
    } else if (typeof callback === 'function') {
      field.isValid = validate(field.value, field.pattern, value => callback(value, form));
    } else {
      field.isValid = false;
    }

    isValid = field.isValid && isValid;
  });
  form.formValidation = isValid;
  return isValid;
};
