import DisplayMessage from "../../components/common/DisplayMessage/DisplayMessage";

export default function validate(args) {
  const { formData, setMessage, setEmailError, setPasswordError } = args;

  const email = formData.get("email").trim();
  const password = formData.get("password").trim();
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

  if (email.length <= 0) {
    setEmailError(true);
  } else {
    setEmailError(false);
  }

  if (password.length <= 0) {
    setPasswordError(true);
  } else {
    setPasswordError(false);
  }

  if (email.length <= 0 || password.length <= 0) {
    setMessage(<DisplayMessage messageType="warning">Alle felt må fylles ut</DisplayMessage>);
    return false;
  }

  if (!regex.test(email)) {
    setMessage(<DisplayMessage messageType="warning">Ugyldig email</DisplayMessage>);
    setEmailError(true);
    return false;
  }

  return true;
}
