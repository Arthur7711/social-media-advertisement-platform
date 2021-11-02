import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
