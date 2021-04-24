import { FC, PropsWithChildren, useState } from 'react';
import { UserContext } from './UserContext';
import { signin, signout } from '../api';
import { UserModel } from '../types';

export interface UserContextProviderProps {
  username?: string | null;
  locale?: string | null;
  theme?: string | null;
}

export const UserContextProvider: FC<UserContextProviderProps> = (
  props: PropsWithChildren<UserContextProviderProps>,
) => {
  const [user, setUser] = useState<UserModel | null>(null);
  const value = {
    user,
    signin: async (username: string, password: string) => {
      // wrap api call
      const out = await signin(username, password);
      setUser(out.user);
      return out;
    },
    signout: async () => {
      // wrap api call
      const out = await signout();
      setUser(null);
      return out;
    },
  };
  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  );
}
