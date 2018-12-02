/** Import Routes */
const indexRoute    = require("./indexRoute"),
      loginRoute    = require("./loginRoute"),
      registerRoute = require("./registerRoute"),
      dashboard     = require("./dashboardRoute");

/** Router Module */
module.exports = {
    index:    indexRoute,
    login:    loginRoute,
    register: registerRoute,
    dashboard
};