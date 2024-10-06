import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useUserStoreContext } from '../../context/useStoreContext';
import { Input, Button } from './AuthFormStyles';

const RegisterForm: React.FC = observer(() => {
  const userStore = useUserStoreContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleRegistration = async () => {
    await userStore.registration(email, password);
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    userStore.checkAuth();
  }, [userStore]);

  return (
    <div>
      <Input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Email" />
      <Input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
      <Button onClick={handleRegistration}>Registration</Button>
    </div>
  );
});

export default RegisterForm;
