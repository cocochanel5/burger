var mysql = require("mysql");    

var source = {
	
	localhost: {
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burger_db'
	},
	jawsDB: {
		port: 3306,
		host: 'g9fej9rujq0yt0cd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'n25h6tz1xxz6uvu6',
		password: 'wkwl1hv3s25qrc8i',
		database: 'dq5m9m2ysrfki6hy'
	}

}

var connection = mysql.createConnection( source.jawsDB );

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Databased connected as id: ' + connection.threadId);
});

module.exports = connection;