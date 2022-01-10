(() => {
    module.exports = field_name => {
      return {
        "any.empty": `${field_name} cannot be an empty field`,
        "any.min": `${field_name} should have a minimum length of {#limit}`,
        "any.max": `${field_name} should have a maximum length of {#limit}`,
        "any.required": `${field_name} is a required field`,
        "string.base": `${field_name} should be a type of 'text'`,
        "string.empty": `Invalid ${field_name}`,
        "string.min": `${field_name} shoule be at least {#limit} characters.`,
        "string.max": `${field_name} shoule be less than {#limit} characters.`,
        "number.min": `${field_name} should have a minimum length of {#limit}`,
        "number.max": `${field_name} should have a maximum length of {#limit}`
      };
    };
  })();
  