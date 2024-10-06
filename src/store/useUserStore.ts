import { useLocalObservable } from 'mobx-react-lite';
import { IUser } from '../service/types';
import { handleLogin, handleRegistration, handleLogout, handleCheckAuth } from './authActions';

export const useUserStore = () => {
  const store = useLocalObservable(() => ({
    user: {} as IUser,
    isAuth: false,
    isLoading: false,

    setAuth(isAuth: boolean) {
      store.isAuth = isAuth;
    },

    setUser(user: IUser) {
      store.user = user;
    },

    setIsLoading(bool: boolean) {
      store.isLoading = bool;
    },

    async login(email: string, password: string) {
      try {
        await handleLogin(email, password, store.setAuth, store.setUser);
        await store.checkAuth();
      } catch (error) {
        console.error('Login error:', error);
      }
    },

    async registration(email: string, password: string) {
      try {
        await handleRegistration(email, password, store.setAuth, store.setUser);
        await store.checkAuth();
      } catch (error) {
        console.error('Registration error:', error);
      }
    },

    async logout() {
      try {
        await handleLogout(store.setAuth, store.setUser);
      } catch (error) {
        console.error('Logout error:', error);
      }
    },

    async checkAuth() {
      try {
        await handleCheckAuth(store.setAuth, store.setUser, store.setIsLoading);
      } catch (error) {
        console.error('CheckAuth error:', error);
      }
    },
  }));

  return store;
};
