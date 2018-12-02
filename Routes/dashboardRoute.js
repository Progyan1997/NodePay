/** Import Data Models */
const models = require("../Models");

/** Dashboard Route Handler */
module.exports = function (req, res) {
    models.getUser({
        user_id: req.query.username
    }).then(function (user) {
        res.render("dashboard", {
            title:   "NodePay | Dashboard",
            name:    user.name,
            bank:    user.bank,
            accno:   user.ac_no,
            balance: user.balance
        });
    });
};