import { createContext } from "react";

export const AuthContext = createContext("Gold");

const AuthProvider = ({ children }) => {
  const asset = "Diamond";
  console.log(asset);
  return <AuthContext.Provider value={asset}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
