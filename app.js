var http = require('http');
var fs = require('fs');
var readline = require('readline');
var stream = require('stream');

var instream = fs.createReadStream('./test.txt');
var outstream = new stream;
var rl = readline.createInterface(instream, outstream);

var arr = [];

rl.on('line', function(line) {
  // process line here
  arr.push(line);
});

rl.on('close', function() {
  // do something on finish here
  console.log('array', arr);
});

var server = http.createServer(function(req, res) {
	console.log('request was made: ' + req.url);
	switch (req.url) {
        case "/ToDo.css" :
			fs.readFile('./ToDo.css',function (err, data){
				if (err) {
					throw err; 
				} 
				res.writeHead(200, {'Content-Type': 'text/css','Content-Length':data.length});
				res.write(data);
				res.end();
			});
            break;
		case "/ToDoScript.js" :
			fs.readFile('./ToDoScript.js',function (err, data){
				if (err) {
					throw err; 
				} 
				res.writeHead(200, {'Content-Type': 'text/javascript','Content-Length':data.length});
				res.write(data);
				res.end();
			});
			break;
        default :    
			fs.readFile('./index.html',function (err, data){
				if (err) {
					throw err; 
				} 
				res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
				res.write(data);
				res.end();
			});
    }
});

server.listen(3000, '127.0.0.1');
console.log('listening to port 3000');