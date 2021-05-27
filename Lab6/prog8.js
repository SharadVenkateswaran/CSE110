var http = require('http');

http.get(process.argv[2], function callback (response) {
	var myStr = "";
	response.setEncoding("utf8");
	response.on("data", function (data) {
		myStr = myStr + data;
	});
	response.on("end", function() {
		console.log(myStr.length);
		console.log(myStr);
	});
});
