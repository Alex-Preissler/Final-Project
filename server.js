const express = require("express");
const mongoose = require("mongoose");
const db = require("./models");
const path = require("path");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api/api-routes");
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/plannerdb";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

require("./routes/api/api-routes")(app, db);


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
	console.log(`🌎 ==> Server now on port ${PORT}!`);
});

