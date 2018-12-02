/** Import Data Models */
const models = require("../Models");

/** Dashboard Route Handler */
module.exports = function (req, res) {
    if (req.method === "POST") {
        models.makeTransaction({
            sender_id:   req.query.username,
            reciever_id: req.body.reciever,
            amount:      req.body.amount
        }).then(function () {
            models.getUser({
                user_id: req.query.username
            }).then(function (user) {
                res.render("dashboard", {
                    title:   "NodePay | Dashboard",
                    name:    user.name,
                    bank:    user.bank,
                    accno:   user.ac_no,
                    balance: user.balance,
                    sender:  user.user_id
                });
            });
        });
    } else {
        models.getUser({
            user_id: req.query.username
        }).then(function (user) {
            res.render("dashboard", {
                title:   "NodePay | Dashboard",
                name:    user.name,
                bank:    user.bank,
                accno:   user.ac_no,
                balance: user.balance,
                sender:  user.user_id
            });
        });
    }
};