import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./views/Landing";
import Signup from "./views/Signup";
import NoMatch from "./views/404";
//import './App.css';

class App extends Component {

	render() {
    return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/" component={ LandingPage } />
					<Route exact path="/signup" component={ Signup } />
					<Route component={ NoMatch } /> 
				</Switch>
			</div>
		</Router>
    );
  }
}

export default App;
