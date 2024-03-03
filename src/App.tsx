import { createContext } from "react";

import "./App.scss";


import "./styles/global.scss";
import { MyProvider } from "./context";
export const MyContext = createContext({} as any);
 

function App() {
  return (
    <MyProvider>
      <></>
    </MyProvider>
  );
}

export default App;
