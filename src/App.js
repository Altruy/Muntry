import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotificationTimer from './components/NotificationTimer';
import Zoom from './components/Zoom';
function App(props) {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/timer">Timer</Link>
          </li>
          <li>
            <Link to="/zoom">Zoom</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/timer">
          <NotificationTimer text={"Speaker"} time={3} />
        </Route>
        <Route path="/zoom">
          <Zoom/>
        </Route>
        <Route path="/">
          <h1>HOME</h1>
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

// function Home() {
//   return <h2>Home</h2>;
// }
