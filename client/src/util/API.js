import axios from "axios";

export default {

	handleUserSignup: function(query) {

		let newUser = {
			firstName: query.first,
			lastName: query.last,
			username: query.username,
			password: query.password,
			contact: {
				phone: query.phone,
				email: query.email
			}
		}
		axios.post("/api/register", newUser, res => {

		});
	}

};