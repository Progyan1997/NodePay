/** Import Data Models */
const models = require("../Models");

/** Register Route Handler */
module.exports = function (req, res) {
    if (req.method === "GET")
        res.render("register", {
            title: "NodePay | Create New Account",
            action: "/register"
        });
    else if (req.method === "POST") {
        const form = req.body;
        models.createUser({
            user_id:  form.username,
            password: form.password,
            name:     form.name,
            ac_no:    form.acnumber,
            bank:     form.bankname
        }).then(function () {
            res.redirect("/");
        });
    }
    else
        res.sendStatus(404);
};