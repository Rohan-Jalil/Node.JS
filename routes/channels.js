var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var IpInfo = require("ipinfo");


/* GET channels listing with ip address. */
router.get('/', function(req, res, next) {
	var ipAddress = req.connection.remoteAddress;

	// Current ip information
	IpInfo(function (err, cLoc) {
	    
		var connection = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'root',
		  password : '',
		  database : 'trial'
		});
		var loc = (cLoc.loc).split(',');
		connection.connect();
		connection.query('SELECT c_name,c_lat,c_lng from channels where ? AND ? ', [{c_lat: Math.round(loc[0]).toFixed(2)}, {c_lng: Math.round(loc[1]).toFixed(2)}], function(err, rows, fields) {
		  if (!err)
		    res.json(rows);
		  else
		    console.log('Error while performing Query.');
		});
		connection.end();

	});
});

/* GET channels listing with lat lng. */
router.get('/:lat/:lng', function(req, res, next) {
	
	var connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : '',
	  database : 'trial'
	});
	connection.connect();
	connection.query('SELECT c_name,c_lat,c_lng from channels where ? AND ? ', [{c_lat: req.params.lat}, {c_lng: req.params.lng}], function(err, rows, fields) {
	  if (!err)
	    res.json(rows);
	  else
	    console.log('Error while performing Query.');
	});
	connection.end();
});

module.exports = router;