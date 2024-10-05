import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import AuthForm from "./components/AuthForm/AuthFrom";
import { useUserStore } from "./store/useUserStore";

const App = observer(() => {
  const store = useUserStore();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  if (store.isLoading) {
    return <div>Loading...</div>;
  }

  if (!store.isAuth) {
    return <AuthForm />;
  }

  return (
    <div>
      <h1>
        {store.isAuth ? `user is authorized ${store.user.email}` : "Log in"}
      </h1>
      <button onClick={() => store.logout()}>Logout</button>
    </div>
  );
});

export default App;
