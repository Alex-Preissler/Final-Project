import React, { Component } from "react";
import HomeView from "./UserViews/HomeView";
import CleaningView from "./UserViews/CleaningView";
import Meals from "./UserViews/Meals";
import Shopping from "./UserViews/Shopping";
import Workouts from "./UserViews/Workouts";
import Calander from "./UserViews/Calander";
import NotFound from "../views/404";

class UserHome extends Component {

	state = {
		view: <HomeView />,
		navItems: ["Home", "Cleaning Lists", "Meal Plans", "Shopping Lists", "Workouts", "Calander"]
	}


	userViewSelect = event => {

		event.preventDefault();

		let pageId = parseInt(event.target.id);

		switch(pageId) {
		
			case(0):
				this.setState({
					view: <HomeView />
				});
				break;
			case(1):
				this.setState({
					view: <CleaningView />
				});
				break;
			case(2):
				this.setState({
					view: <Meals />
				});
				break;
			case(3):
				this.setState({
					view: <Shopping />
				});
				break;
			case(4):
				this.setState({
					view: <Workouts />
				});
				break;
			case(5):
				this.setState({
					view: <Calander />
				});
				break;
			default:
				this.setState({
					view: <NotFound />
				});
				break;
		};
	}


	render() {
		return(
			<div className="row">
				<div className="col">
					<div>
						<ul>
							{this.state.navItems.map(item => {
								return(
									<li key= { this.state.navItems.indexOf(item) }>
										<button
											onClick={ this.userViewSelect }
											key= { this.state.navItems.indexOf(item) }
											id= { this.state.navItems.indexOf(item) }
										>
										{ item }
										</button>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<div className="col">
					{ this.state.view }
				</div>
			</div>
		);
	};

};

export default UserHome;