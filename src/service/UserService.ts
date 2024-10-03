import api from "../api";
import { AxiosResponse } from "axios";
import { IUser } from "./types";

export const getUsers = async (): Promise<AxiosResponse<IUser[]>> => {
  return api.get<IUser[]>("/users");
};
