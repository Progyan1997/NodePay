/** Import Routes */
const indexRoute    = require("./indexRoute"),
      loginRoute    = require("./loginRoute"),
      registerRoute = require("./registerRoute");

/** Router Module */
module.exports = {
    index:    indexRoute,
    login:    loginRoute,
    register: registerRoute
};