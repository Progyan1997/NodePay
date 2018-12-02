/** Import Data Model Functions */
const model = require("../Models");

/** Login Route Handler */
module.exports = function (req, res) {
    const { username, password } = req.body;
    if (typeof username === "undefined" || typeof password === "undefined") {
        res.sendStatus(401);
    }
    model.findUser({ user_id: username, password })
        .then(function (user) {
            if (user === null) {
                res.sendStatus(403);
            } else {
                res.send(user);
            }
        });
};