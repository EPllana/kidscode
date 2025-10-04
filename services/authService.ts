import { USERS } from '../constants.ts';
import { User } from '../types.ts';

const USER_KEY = 'currentUser';

export const login = (username: string, password?: string): User | null => {
  const user = USERS.find(
    (u) => u.username.toLowerCase() === username.toLowerCase() && u.password === password
  );

  if (user) {
    const { password, ...userToStore } = user;
    sessionStorage.setItem(USER_KEY, JSON.stringify(userToStore));
    return userToStore;
  }
  return null;
};

export const logout = (): void => {
  sessionStorage.removeItem(USER_KEY);
};

export const getCurrentUser = (): User | null => {
  const userJson = sessionStorage.getItem(USER_KEY);
  if (userJson) {
    return JSON.parse(userJson);
  }
  return null;
};
