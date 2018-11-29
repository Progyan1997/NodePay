/** Index Route Handler */
module.exports = function (req, res) {
    res.render("index", { title: "Hey", message: "Hello there!" });
}