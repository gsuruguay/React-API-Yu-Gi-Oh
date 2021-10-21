import './App.css';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import { Switch, Route } from "react-router-dom";
import About from './Components/About/About';
import Details from './Components/DetailsCards/Details';
import Footer from './Components/Footer/Footer';
import Contacts from './Components/Contact/Contact';
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
