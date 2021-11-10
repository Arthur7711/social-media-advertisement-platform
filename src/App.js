import { BrowserRouter, Route } from "react-router-dom";
import Features from "./pages/features/Features";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Pricing from "./pages/pricing/Pricing";
import Register from "./pages/register/Register";
import User from "./pages/user/User";
import Dashboard from './pages/dashboard/Dashboard'
import Businesses from './pages/businesses/Businesses'
import Accounts from './pages/accounts/Accounts'
import Introduction from './pages/introduction/Introduction'
import Textgenerator from './pages/textGenerator/TextGenerator'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/features" component={Features} />
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/user" component={User} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/businesses" component={Businesses} />
      <Route exact path="/accounts" component={Accounts} />
      <Route exact path="/introduction" component={Introduction} />
      <Route exact path="/textgenerator" component={Textgenerator} />
    </BrowserRouter>
  );
}

export default App;
