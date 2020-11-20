import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Game from "./components/game";
import Rules from "./components/rules";

const App = () => {
  return (
    <div className="App">
      <Router>
        <h1>Game Juniper Green</h1>

        <Switch>
          <Route exact path="/">
            <Rules />
          </Route>

          <Route exact path="/game">
            <Game />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
