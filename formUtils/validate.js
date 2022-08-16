export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
    console.log("Email required");
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.message) {
    errors.message = "Massage is required";
  } else if (values.message.length < 3) {
    errors.message = "Massage needs to be 6 characters or more";
  }

  return errors;
}
