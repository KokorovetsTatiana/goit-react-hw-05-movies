import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./views/HomePage";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact></Route>
        <Route path="/movies/:id"></Route>
      </Switch>
    </div>
  );
}

export default App;
