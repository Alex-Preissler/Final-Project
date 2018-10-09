const router = require("express").Router();
const bcrypt = require("bcrypt");

module.exports = (app, db) => {

	app.post("/api/register", (req, res) => {
		
		let newUser = req.body;

		console.log(newUser);
		
		bcrypt.hash(req.body.password, 5, (err, hash) => {
			
			newUser.password = hash;
			console.log(newUser);

			console.log(db);
			db.User.create(newUser)
				.then(result => {
					res.end();
				}).catch(err => {
					res.json(err);
				});
		});
	});
};