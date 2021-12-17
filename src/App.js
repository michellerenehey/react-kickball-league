import './App.css';
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';

import Teams from './views/Teams/Teams';
import Players from './views/Players/Players';
import Team from './views/Team/Team';
import Player from './views/Player/Player';
import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <h1>Kickball Manager</h1>

      <BrowserRouter>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/players">Players</NavLink>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/teams/:id" component={Team} />
          <Route exact path="/players" component={Players} />
          <Route exact path="/players/:id" component={Player} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
