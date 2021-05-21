import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Brewhome from './Components/BrewHome/Brewhome';
import BrewDetails from './Components/BrewDetails/BrewDetails';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/breweries/:itemId">
            <BrewDetails></BrewDetails>
          </Route>
          <Route path="/">
            <Brewhome></Brewhome>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
