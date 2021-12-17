import './App.css';
import { BrowserRouter, Switch, NavLink, Route } from 'react-router-dom';

import Teams from './views/Teams/Teams';
import Players from './views/Players/Players';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/players">Players</NavLink>
        <Switch>
          <Route exact path="/teams" component={Teams} />
          <Route exact path="/players" component={Players} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
