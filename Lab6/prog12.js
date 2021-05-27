var http = require('http');
var map = require('through2-map');

uc = map(function(chunk) {
	return chunk.toString().toUpperCase();
});

myServer = http.createServer(function callback (request, response)
	{
		if(request.method == 'POST')
		{
			request.pipe(uc).pipe(response);
		}
	});
myServer.listen(process.argv[2]);

