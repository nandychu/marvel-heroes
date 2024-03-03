import "./App.scss";
import "./styles/global.scss";
import { MyProvider } from "./context";
import { Router } from "./router";
 

function App() {
  return (
    <MyProvider>
     <Router/>
    </MyProvider>
  );
}

export default App;
