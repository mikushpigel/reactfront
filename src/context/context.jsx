import { createContext, useContext, useState } from "react";
import userServices from "../services/userServic";

const authContext = createContext(null);
authContext.displayName = "auth context";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(userServices.getUser());

  const refreshUser = () => setUser(userServices.getUser());

  const logIn = async (cardential) => {
    const response = await userServices.validateUser(cardential);
    refreshUser();
    return response;
  };

  const logOut = () => {
    userServices.logOutUser();
    refreshUser();
  };

  return (
    <authContext.Provider
      value={{ user, logIn, logOut, SignUp: userServices.signUpUser }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
