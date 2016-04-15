var express = require ('express');
var app = express();
var PORT = 3501;

var middleware = {
	requireAuthentication: function (req, res, next) { 
		console.log ('middleware accedido');
		next(); 
	},
	logger: function (req, res, next) { 
		console.log ('Request: ' + req.method + ', made on ' + new Date().toString() + ' ' + req.originalUrl); 
		next();
	}
}

app.use(middleware.logger);

// request with info sent by the user and result the info I send back to the user
// usaremos get como http
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send ('About us!');
});

// espose a folder
app.use(express.static(__dirname + '/public'));

// ponemos al servidor a escuchar en el puerto 3000
app.listen (PORT, function(){
	console.log('Todo fue bien en el puerto: ' + PORT);
});