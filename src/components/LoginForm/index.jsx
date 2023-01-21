import { useState } from "react";

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  // ===== Handlers =====
  function loginFormHandler(e) {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    // dynamic key
    // spread operator
  }

  return (
    <form>
      <label htmlFor="email">email</label>
      <input
        type="text"
        id="email"
        name="email"
        value={userInfo.email}
        onChange={loginFormHandler}
      />
      <label htmlFor="password">password</label>
      <input
        type="text"
        id="password"
        name="password"
        value={userInfo.password}
        onChange={loginFormHandler}
      />
    </form>
  );
};

export default LoginForm;
