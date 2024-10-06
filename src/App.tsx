import React from 'react';
import { observer } from 'mobx-react-lite';
import { useUserStoreContext } from './context/useStoreContext';
import AuthForm from './components/AuthForm/AuthFrom';

const App: React.FC = observer(() => {
  const userStore = useUserStoreContext();

  return (
    <div>
      {!userStore.isAuth ? (
        <AuthForm />
      ) : (
        <div>
          <h1>{`User is authorized: ${userStore.user.email}`}</h1>
          <button onClick={() => userStore.logout()}>Logout</button>
        </div>
      )}
    </div>
  );
});

export default App;
