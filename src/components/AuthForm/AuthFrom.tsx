import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Container, Header, BtnAuthForm } from './AuthFormStyles';

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <Container>
      <Header>
        <BtnAuthForm onClick={toggleForm} data-active={isLogin ? 'true' : 'false'}>
          Login
        </BtnAuthForm>
        <BtnAuthForm onClick={toggleForm} data-active={!isLogin ? 'true' : 'false'}>
          Registration
        </BtnAuthForm>
      </Header>
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </Container>
  );
};

export default AuthForm;
