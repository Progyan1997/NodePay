/** Index Route Handler */
module.exports = function (_, res) {
    res.render("index", { title: "Hey", message: "Hello there!" });
};