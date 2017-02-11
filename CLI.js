var logger = require('./logger.js');

var fs = require('fs');

var weather = require('./weather.js');

const input = process.argv.slice(2);

const choice = input[0];

const userName = input[1];

const location = input[2];

if (choice === "admin") {
	logger.data;
	console.log(logger.data);
} else if (choice === "user") {
	weather.find(location, "F");
	weather.log(userName, location);
}