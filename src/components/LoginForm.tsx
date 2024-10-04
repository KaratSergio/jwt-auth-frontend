import { useState, useContext } from "react";
import { UserStoreContext } from "../main";

const LoginForm: React.FC = () => {
  const userStore = useContext(UserStoreContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    userStore.login(email, password);

    setEmail("");
    setPassword("");
  };

  const handleRegistration = () => {
    userStore.registration(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegistration}>Registration</button>
    </div>
  );
};

export default LoginForm;
