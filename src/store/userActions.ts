import { getUsers } from '../service/UserService';
import { IUser } from '../service/types';

export const handleGetUsers = async (): Promise<IUser[]> => {
  try {
    const response = await getUsers();
    return response.data;
  } catch (error) {
    console.error((error as Error).message || 'Failed to get users');
    return [];
  }
};
