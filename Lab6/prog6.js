var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback)
{
	fs.readdir(dir, function(err, list) {
		if(err) { return callback(err); }
		myArray = []
		for(var i = 0; i < list.length; i++)
		{
			if (path.extname(list[i]) == ("." + ext))
			{
				myArray.push(list[i]);
			}
		}
		callback(err, myArray);
	});
	
};
