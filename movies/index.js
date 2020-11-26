const express = require("express");
const app = express();

const {config} = require("./config/index");
const moviesApi = require("./routes/movies");

const {logError, errorHandler} = require("./utils/middleware/errorHandlers");

app.use(express.json());
app.use(require("cors")());

moviesApi(app);

app.use(logError);
app.use(errorHandler);

app.listen(config.port, ()=> {
	console.log(`Server started on port ${config.port}`);
});