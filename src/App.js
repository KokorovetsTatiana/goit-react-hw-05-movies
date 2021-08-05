import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Switch>
        <Route path="/" exact></Route>
        <Route path="/movies" exact></Route>
        <Route path="/movies/:id"></Route>
      </Switch>
    </div>
  );
}

export default App;
