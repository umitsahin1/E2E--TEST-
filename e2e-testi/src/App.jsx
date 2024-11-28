import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Success from "./components/Success";

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/success">
          <Success />
        </Route>
      </Switch>
    </div>
  );
}
