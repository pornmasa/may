var http = require('http');
var querystring = require('querystring');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "10352342"
});

var server = http.createServer().listen(90);

server.on('request', function (req, res) {
    if (req.method == 'POST') {
        var body = '';
    }

    req.on('data', function (data) {//GET data client.js
		console.log('---------GETDATE--------',body);
        body += data;
	con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
    });

    req.on('end', function () {
        var post = querystring.parse(body);
        console.log(post);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('DATE Tanfer\n');
    });
});

console.log('Listening on port 90');
