// import devLogger from "./devLogger";
// import prodLogger from "./prodLogger";
const devLogger = require("./devLogger");
const prodLogger = require("./prodLogger");

let logger;
if (process.env.NODE_ENV !== "development") {
  logger = prodLogger;
} else {
  logger = devLogger;
}

export default logger;
