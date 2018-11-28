/** Entry Point of The Application */

/** Import CommonJS Modules */
const express = require("express");

/** Get Environment Variables */
const host = process.env.NODEJS_HOST || "127.0.0.1",
      port = process.env.NODEJS_PORT || "8080"

/** Instantiate an Express Application */
const app = express();

/** Define Route Paths and Parameters */
app.get("/", function (req, res) {
    res.send("Hello World!");
});

/** Start The Server */
app.listen(port, function () {
    console.log(`App is started on ${host}:${port}`);
})
