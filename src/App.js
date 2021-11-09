import { BrowserRouter, Route } from "react-router-dom";
import Features from "./pages/features/Features";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Pricing from "./pages/pricing/Pricing";
import Register from "./pages/register/Register";
import User from "./pages/user/User";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/features" component={Features} />
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/user" component={User} />
    </BrowserRouter>
  );
}

export default App;
