/** Index Route Handler */
module.exports = function (req, res) {
    res.render("index", {
        title: "NodePay | Fast and Secure Payment Gateway",
        loginURL: "/login",
        registerURL: "/register"
    });
};