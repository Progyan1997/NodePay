/** Import Routes */
const indexRoute = require("./indexRoute"),
      loginRoute = require("./loginRoute");

/** Router Module */
module.exports = {
    index: indexRoute,
    login: loginRoute
};