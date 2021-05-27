var net = require('net');

myServer = net.createServer(function listener(socket)
	{
		var date = new Date();
		var year = (date.getFullYear()).toString();
		var month = (date.getMonth() + 1).toString();
		if(date.getDate() < 10)
		{
			var day = "0" + (date.getDate()).toString();
		}
		else
		{
			var day = (date.getDate()).toString();
		}
		if(date.getHours() < 10)
		{
			var hours = "0" + (date.getHours()).toString();
		}
		else
		{
			var hours = (date.getHours()).toString();
		}
		if(date.getMinutes() < 10)
		{
			var minutes = "0" + (date.getMinutes()).toString();
		}
		else
		{
			var minutes = (date.getMinutes()).toString();
		}

		socket.end(year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n");
	});

myServer.listen(process.argv[2]);
