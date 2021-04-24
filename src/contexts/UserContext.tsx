import React from 'react';
import { signin, signout } from '../api';
import { UserModel } from '../types';

export interface UserContextModel {
  user: UserModel | null;
  signin: typeof signin;
  signout: typeof signout;
}

export const UserContext = React.createContext<Partial<UserContextModel>>({});
