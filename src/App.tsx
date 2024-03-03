import { createContext } from "react";

import "./App.scss";


import "./styles/global.scss";
import { MyProvider } from "./context";
import { Router } from "./router";
export const MyContext = createContext({} as any);
 

function App() {
  return (
    <MyProvider>
     <Router/>
    </MyProvider>
  );
}

export default App;
