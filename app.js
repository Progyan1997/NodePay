/** Entry Point of The Application */

/** Import CommonJS Modules */
const express     = require("express"),
      bodyParser  = require("body-parser"),
      morgan      = require("morgan"),
      path        = require("path"),
      serveStatic = require("serve-static");

/** Get Environment Variables */
const host = process.env.NODEJS_HOST || "127.0.0.1",
      port = process.env.NODEJS_PORT || "8080"

/** Instantiate an Express Application */
const app = express();

/** Inject Middlewares to Application */
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(serveStatic(path.join(__dirname, "Static")));
app.set("view engine", "pug");
app.set("views", "Views");

/** Define Route Paths and Parameters */
app.get("/", function (req, res) {
    res.render("index", { title: "Hey", message: "Hello there!" });
});

/** Start The Server */
app.listen(port, function () {
    console.log(`App is started on ${host}:${port}`);
})
