var fs = require('fs');

const logger = {
	log: function writeLog(data) {
		data = JSON.stringify(data);
		fs.writeFile("log.json", data, function() {
			console.log("Data Logged!")

		});
	},
	// getData: function readLog() {
	// 	fs.readFile("log.json", "UTF-8", function(err, data) {
	// 		if (err) {
	// 			console.log("Oops someething went wrong")
	// 			return 
	// 		}
	// 		JSON.parse(data)
	// 	})
	// }

	data: require('./log')
}


module.exports = logger;



