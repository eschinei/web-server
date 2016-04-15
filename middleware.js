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

module.exports = middleware;
