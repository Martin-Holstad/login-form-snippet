import styles from "./Login.module.css";
import { useState } from "react";
import validate from "./validate";
import login from "../../actions/postRequests/login";
import errorHandler from "./errorHandler";
import DisplayMessage from "../common/DisplayMessage/DisplayMessage";
import ButtonLoader from "../common/Loaders/ButtonLoader";

export default function Login() {
  const [message, setMessage] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData(event.target);

      const validated = validate({ formData, setMessage, setEmailError, setPasswordError });

      if (!validated) return;

      const email = formData.get("email").trim();
      const password = formData.get("password").trim();

      const user = await login(email, password);

      if (!user) return;

      setMessage(<DisplayMessage messageType="success">Login successfull!!</DisplayMessage>);
    } catch (error) {
      console.log(error);
      const errorObj = errorHandler(error);
      setMessage(<DisplayMessage messageType={errorObj.messageType}>{errorObj.message}</DisplayMessage>);
    } finally {
      setLoading(false);
    }
  }

  function clearMessage() {
    setMessage(null);
  }

  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={(event) => handleSubmit(event)}>
        <div className={styles.logo}>
          <img src="logo.png" alt="rema logo" />
        </div>
        <h1>Logg inn</h1>
        {message && <div className={styles.message}>{message}</div>}
        <label htmlFor="email">Email</label>
        {emailError && <p className={styles.error}>Fyll in email</p>}
        <input type="text" name="email" id="email" placeholder="Email" onKeyDown={() => clearMessage()} />

        <label htmlFor="password">Passord</label>
        {passwordError && <p className={styles.error}>Fyll in passord</p>}
        <input type="password" name="password" id="password" placeholder="Passord" onKeyDown={() => clearMessage()} />

        <button>{loading ? <ButtonLoader size={16} /> : "Logg inn"}</button>
      </form>
    </main>
  );
}
