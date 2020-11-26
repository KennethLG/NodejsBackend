

function logError(err, req, res, next) {
	console.log(err);
	next(err);
}

function errorHandler(err, req, res, next) {
	res.status(err.status || 500);
	res.json(err.message);
}

module.exports = {
	logError,
	errorHandler
};