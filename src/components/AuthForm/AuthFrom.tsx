import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Container, Header, ButtonAuth } from "./AuthFormStyles";

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <Container>
      <Header>
        <ButtonAuth onClick={toggleForm} active={isLogin}>
          Login
        </ButtonAuth>
        <ButtonAuth onClick={toggleForm} active={!isLogin}>
          Registration
        </ButtonAuth>
      </Header>
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </Container>
  );
};

export default Auth;
