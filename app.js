var express = require('express'),
	app = express(),
	request = require('request'),
	urlHead = 'https://docs.google.com/spreadsheets/d/',
	spreadsheet = '11rQ1qmEgI1WxGt6xlyWA1Mwq97jxRpg4gGVo8wB15wI',
	urlTail = '/pub?gid=0&single=true&output=csv';

app.use(express.static('public'));

app.get('/weights', function(req, res) {
	request.get(urlHead + spreadsheet + urlTail, function(err, response) {
		if (err) {
			throw err;
		}
		res.send(response.body);
	});
});

var server = app.listen(8080, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Listening on http://%s:%s', host, port);
});