var fs = require('fs');
fs.readFile(process.argv[2], function callback(err,data) {
	if (err)
	{
		throw err;
	}
	content = data;
	content = (content.toString()).split('\n');
	console.log(content.length - 1);
});

