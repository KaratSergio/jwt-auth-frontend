import { useLocalObservable } from "mobx-react-lite";
import { IUser } from "../service/types";
import { handleLogin, handleRegistration, handleLogout } from "./authActions";

export const useUserStore = () => {
  const store = useLocalObservable(() => ({
    user: {} as IUser,
    isAuth: false,

    setAuth(isAuth: boolean) {
      store.isAuth = isAuth;
    },

    setUser(user: IUser) {
      store.user = user;
    },

    login(email: string, password: string) {
      handleLogin(email, password, store.setAuth, store.setUser);
    },

    registration(email: string, password: string) {
      handleRegistration(email, password, store.setAuth, store.setUser);
    },

    logout() {
      handleLogout(store.setAuth, store.setUser);
    },
  }));

  return store;
};
