// Context.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext({ email: '', auth: false });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: '', auth: false });

  const loginContext = (email, token) => {
    setUser((user) => ({
      email: email,
      auth: true,
    }));
    localStorage.setItem('token', token);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser((user) => ({
      email: '',
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUser() {
  return useContext(UserContext);
}
