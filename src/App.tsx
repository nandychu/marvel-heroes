import { createContext, useEffect, useState } from "react";

import "./App.scss";


import "./styles/global.scss";
export const MyContext = createContext({} as any);
 

function App() {
  return (
    <p>My App</p>
  );
}

export default App;
