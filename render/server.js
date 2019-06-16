var http = require('http');
var fs = require('fs');


function onRequest(req,res){
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    fs.readFile('./home.html',null, function(err,data){
        if(err) {
            res.writeHead(404);
            res.write('File not found');
        }else{
            res.write(data);
        }
        res.end();
    })
}