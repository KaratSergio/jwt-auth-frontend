import { login, register, logout, checkAuth } from "../service/AuthService";
import { IUser } from "../service/types";

export const handleLogin = async (
  email: string,
  password: string,
  setAuth: (isAuth: boolean) => void,
  setUser: (user: IUser) => void
) => {
  try {
    const response = await login(email, password);
    console.log("Login response:", response);
    localStorage.setItem("token", response.data.userData.accessToken);
    setAuth(true);
    setUser(response.data.userData.user);
  } catch (error) {
    console.error((error as Error).message || "An unknown error occurred");
  }
};

export const handleRegistration = async (
  email: string,
  password: string,
  setAuth: (isAuth: boolean) => void,
  setUser: (user: IUser) => void
) => {
  try {
    const response = await register(email, password);
    localStorage.setItem("token", response.data.userData.accessToken);
    setAuth(true);
    setUser(response.data.userData.user);
  } catch (error) {
    console.error((error as Error).message || "An unknown error occurred");
  }
};

export const handleLogout = async (
  setAuth: (isAuth: boolean) => void,
  setUser: (user: IUser) => void
) => {
  try {
    await logout();
    localStorage.removeItem("token");
    setAuth(false);
    setUser({} as IUser);
  } catch (error) {
    console.error((error as Error).message || "An unknown error occurred");
  }
};

export const handleCheckAuth = async (
  setAuth: (isAuth: boolean) => void,
  setUser: (user: IUser) => void,
  setIsLoading: (bool: boolean) => void
) => {
  setIsLoading(true);
  try {
    const response = await checkAuth();
    localStorage.setItem("token", response.data.userData.accessToken);
    setAuth(true);
    setUser(response.data.userData.user);
  } catch (error) {
    console.error((error as Error).message || "Failed to check authentication");
  } finally {
    setIsLoading(false);
  }
};
