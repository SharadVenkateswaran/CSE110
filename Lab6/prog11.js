var http = require('http');
var fs = require('fs');
myServer = http.createServer(function callback (request, response)
	{
		myStream = fs.createReadStream(process.argv[3]);
		myStream.pipe(response);
	});
myServer.listen(process.argv[2]);
