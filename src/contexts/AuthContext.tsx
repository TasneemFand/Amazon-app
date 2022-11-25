import { ReactNode, createContext } from 'react';
import { createUser } from '../services/index';

type AuthContext = {
  createUser: (email: string, password: string) => Promise<void>;
};

export const UserContext = createContext<AuthContext>({} as AuthContext);

type Props = {
  children: ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  return (
    <UserContext.Provider value={{ createUser }}>
      {children}
    </UserContext.Provider>
  );
};
