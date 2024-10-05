export interface IUser {
  id: string;
  email: string;
  isActivated: boolean;
}

export interface UserData {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}

export interface AuthResponse {
  userData: UserData;
}
