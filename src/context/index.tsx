import { createContext } from "react";

export const MyContext = createContext({} as any);

//@ts-ignore
export const MyProvider = ({ children }) => {
  return <MyContext.Provider value={{}}>{children}</MyContext.Provider>;
};
