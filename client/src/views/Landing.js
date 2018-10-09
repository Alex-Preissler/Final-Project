import React, { Component } from "react";
import Nav from "../components/Nav";
import UserHome from "../components/UserHome";
import AppHome from "../components/AppHome";

class Landing extends Component {

	state = {
		isLoggedIn: true
	}

	render() {

		return(
			<div className="container-fluid">
				<div className="row">
					<div className="col">
						<Nav isLoggedIn={ this.state.isLoggedIn }></Nav>
						{ this.state.isLoggedIn ? <UserHome /> : <AppHome /> }
					</div>
				</div>
			</div>
		)
	}


}

export default Landing;