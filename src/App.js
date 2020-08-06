import React, { Fragment } from "react";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Vehicles from "./components/Vehicles";
import Starships from "./components/Starships";
import People from "./components/People";
import Planets from "./components/Planets";
import Species from "./components/Species";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div>
            <nav>
              <Navigation />
            </nav>

            {/* A <Switch> looks through its children <Route>s and
             renders the first one that matches the current URL. */}
            <Switch>
              <Route path='/vehicles'>
                <Vehicles />
              </Route>
              <Route path='/starships'>
                <Starships />
              </Route>
              <Route path='/species'>
                <Species />
              </Route>
              <Route path='/planets'>
                <Planets />
              </Route>
              <Route path='/people'>
                <People />
              </Route>
              <Route path='/'>
                <Main />
              </Route>
            </Switch>
          </div>
        </Router>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
