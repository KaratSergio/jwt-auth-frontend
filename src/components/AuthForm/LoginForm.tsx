import React, { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { UserStoreContext } from "../../main";
import { Input, Button } from "./AuthFormStyles";

const LoginForm: React.FC = observer(() => {
  const userStore = useContext(UserStoreContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    await userStore.login(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="Email"
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
});

export default LoginForm;
