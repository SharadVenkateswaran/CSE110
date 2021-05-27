var http = require('http');

var urls =  [process.argv[2], process.argv[3], process.argv[4]];

var strings = [null, null, null];

for (var i = 0; i < 3; i++)
{
	(function(i) {
	http.get(urls[i], function(response) {
		var myStr = "";
		response.setEncoding("utf8");
		response.on("data", function(data) {
			myStr = myStr + data;
		});
		response.on("end", function() {
			strings[i] = myStr;
			var nullFlag = false;
			for(var j = 0; j < 3; j++)
			{
				if (strings[j] == null)
				{
					nullFlag = true;
				}
			}
			if (nullFlag == false)
			{
				for (var k = 0; k < 3; k++)
				{
					console.log(strings[k]);
				}
			}
		});
	});
	})(i);
}
