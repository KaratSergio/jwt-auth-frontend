import api from "../api";
import { AxiosResponse } from "axios";
import { AuthResponse } from "./types";

export const login = async (
  email: string,
  password: string
): Promise<AxiosResponse<AuthResponse>> => {
  return api.post<AuthResponse>("/login", {
    email,
    password,
  });
};

export const register = async (
  email: string,
  password: string
): Promise<AxiosResponse<AuthResponse>> => {
  return api.post<AuthResponse>("/registration", {
    email,
    password,
  });
};

export const logout = async (): Promise<void> => {
  return api.post("/logout");
};

export const checkAuth = async () => {
  return api.get<AuthResponse>("/refresh");
};
