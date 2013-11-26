var http = require('http');
var fs = require('fs');
var io = require('socket.io');
var exec = require('child_process').exec;
var url = require('url');


fs.readFile('index.html', function (err, html) {
        if (err) {
                throw err;
        }

        var server = http.createServer(function(req, res){

                // Send HTML headers and message
                res.writeHead(200,{ 'Content-Type': 'text/html' });
                res.write(html);
                res.end();

                //url?status=on
                //checking property of url for Processing sketch
                if( url.parse(req.url, true).query.status == 'on'){
                        exec("gpio -g write 17 1");
                }
                if( url.parse(req.url, true).query.status == 'off'){
                        exec("gpio -g write 17 0");
                }
        });

        server.listen(80);


        //SOCKET CODE
        var socket = io.listen(server);

        // Listen for incoming connections from clients
        socket.on('connection', function (client) {

                client.on('ON', function (data) {
                        exec("gpio -g write 17 1");
                });

                client.on('OFF', function (data) {
                        exec("gpio -g write 17 0");
                });
        });

});




