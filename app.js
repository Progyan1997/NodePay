/** Import CommonJS Modules and Router */
const express     = require("express"),
      bodyParser  = require("body-parser"),
      morgan      = require("morgan"),
      path        = require("path"),
      serveStatic = require("serve-static"),
      config      = require("./Configs/appconfig"),
      routes      = require("./Routes");

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
app.get("/", routes.index);

/** Start The Server */
app.listen(config, function () {
    console.log(`App is started on ${config.host}\nListening on ${config.port}`);
});
