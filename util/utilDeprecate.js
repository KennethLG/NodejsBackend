const util = require("util");

const hello = util.deprecate(()=> {
	console.log("Hi, man");
}, "is deprecate");

hello();