var fs = require('fs');

buf = fs.readFileSync(process.argv[2]);
buf = buf.toString();

myArr = buf.split('\n');

console.log(myArr.length - 1);
