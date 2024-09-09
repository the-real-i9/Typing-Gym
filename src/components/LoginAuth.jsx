import axios from "axios";
import { useState } from "react";
import { storeToken } from "../lib/helpers";

function LoginAuth() {
  const [emailOrUsernameValue, setEmailOrUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleUserLogin = async (ev) => {
    ev.preventDefault();

    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_STRAPI_HOST}/api/auth/local`,
        {
          identifier: emailOrUsernameValue,
          password: passwordValue,
        }
      );
      const { user, jwt } = res.data;
      console.log(user);
      storeToken(jwt);
      setLoading(false);
      window.location.reload();
    } catch (e) {
      console.log(e.response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-title">Login</div>
      <form action="">
        <div className="error">{errorMessage || ""}</div>
        <div className="input-wrapper">
          <label htmlFor="email_or_username">Email or Username</label>
          <input
            type="text"
            name="email_or_username"
            id="email_or_username"
            value={emailOrUsernameValue}
            onChange={(ev) => setEmailOrUsernameValue(ev.target.value)}
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={passwordValue}
            onChange={(ev) => setPasswordValue(ev.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleUserLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginAuth;
