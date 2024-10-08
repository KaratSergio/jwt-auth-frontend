import React from 'react';
import { observer } from 'mobx-react-lite';
import { useUserStoreContext } from './context/useStoreContext';
import AuthForm from './components/AuthForm/AuthFrom';

const App: React.FC = observer(() => {
  const userStore = useUserStoreContext();

  const listUsers = async () => {
    try {
      await userStore.fetchUsers();
    } catch (e) {
      console.error('Error fetching users:', e);
    }
  };

  return (
    <div>
      {!userStore.isAuth ? (
        <AuthForm />
      ) : (
        <div>
          <h1>{`User is authorized: ${userStore.user.email}`}</h1>
          <button onClick={() => userStore.logout()}>Logout</button>
          <div>
            <button onClick={listUsers}>Get list users</button>
            {userStore.users.map((user) => (
              <div key={user.email}>{user.email}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export default App;
