const express = require("express");
const app = express();

const {config} = require("./config/index");
const moviesApi = require("./routes/movies");

const {logError, wrapError, errorHandler} = require("./utils/middleware/errorHandlers");
const notFoundHandler = require("./utils/middleware/notFoundHandler");

app.use(express.json());
app.use(require("cors")());

moviesApi(app);

//Error 404
app.use(notFoundHandler);

// Middlewares Errors
app.use(logError);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, ()=> {
	console.log(`Server started on port ${config.port}`);
});