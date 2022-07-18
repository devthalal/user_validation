import Ajv from "ajv";
import addFormats from "ajv-formats";

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const validate = (schema, data) => {
  const validator = ajv.compile(schema);
  const isValid = validator(data);

  if (isValid) return null;
  return ajv.errorsText(validator.errors);
};

export default { validate };
