var weather = require('weather-js');

var logger = require('./logger.js');

const weatherAdmin = {
    find: function(location, degree) {
        weather.find({
                search: location,
                degreeType: degree,
            }, function(err, result) {
                if (err) console.log(err);
                console.log(JSON.stringify(result, null, 2));
            });
        },
    log: function(user, location) {
        const time = Date.now();

        var userLog = logger.data;
        const entry = {
        	user,
        	location,
        	time,
        };

        userLog.logs.push(entry);
        logger.log(userLog);
    }
};

module.exports = weatherAdmin;






