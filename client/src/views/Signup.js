import React, { Component } from "react";
import Nav from "../components/Nav";
import API from "../util/API";

class Signup extends Component {


	state = {
		first: "",
		last: "",
		phone: "",
		email: "",
		username: "",
		password: "",
		passwordMatch: ""
	};


	componentDidMount


	handleUserSignup = event => {

		event.preventDefault();

		if (this.state.password === this.state.passwordMatch) {

		};

		API.handleUserSignup(this.state);

	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	render() {

		return (
			<div className="container-fluid">
				<Nav id="registration"></Nav>
				<div className="row">
					<div className="col">
						<form>
							<div className="form-group">
								<label>First Name
								<input type="text" className="form-control" id="first-name" placeholder="First Name" name="first" value={this.state.first} onChange={this.handleInputChange} />
								</label>
							</div>
							<div className="form-group">
								<label>Last Name</label>
								<input type="text" className="form-control" id="last-name" placeholder="Last Name" name="last" value={this.state.last} onChange={this.handleInputChange} />
							</div>
							<div className="form-group">
								<label>Phone Number</label>
								<input type="tel" className="form-control" id="phone" placeholder="Phone Number" name="phone" value={this.state.phone} onChange={this.handleInputChange} />
							</div>
							<div className="form-group">
								<label>Email</label>
								<input type="email" className="form-control" id="email" placeholder="Email" name="email" value={this.state.email} onChange={this.handleInputChange} />
							</div>
							<div className="form-group">
								<label>Username</label>
								<input type="username" className="form-control" id="username" placeholder="Username" name="username" value={this.state.username} onChange={this.handleInputChange} />
							</div>
							<div className="form-group">
								<label>Password</label>
								<input type="password" className="form-control" id="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange} />
							</div>
							<div className="form-group">
								<label>Confirm Password</label>
								<input type="password" className="form-control" id="confirmpassword" placeholder="Confirm Password" name="passwordMatch" value={this.state.passwordMatch} onChange={this.handleInputChange} />
							</div>
							<button type="submit" value="submit" className="btn btn-primary" onClick={this.handleUserSignup}>Signup</button>
						</form>
					</div>
				</div>
			</div>
		)
	}


}

export default Signup;