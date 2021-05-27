var http = require('http');
var url = require('url');

myServer = http.createServer( function callback (request, response) 
	{
		var myUrl = url.parse(request.url, true);
		if(myUrl.pathname == '/api/unixtime')
		{
			var time = unixTime(myUrl.query.iso);
		}
		else
		{
			var time = parseTime(myUrl.query.iso);;
		}

		response.writeHead(200, { 'Content-Type': 'application/json' });
		response.end(JSON.stringify(time));
	});
var unixTime = (time_str) => {
	return {
		unixtime: getTime(time_str)
	};
}

var getTime = (time_str) => {
	return Date.parse(time_str);
}

var parseTime = (time_str) => {
	var date = new Date(getTime(time_str));

	return {
		hour: date.getHours(),
		minute: date.getMinutes(),
		second: date.getSeconds()
	};
}

myServer.listen(process.argv[2]);

