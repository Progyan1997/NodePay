/** Import Data Models */
const User        = require("./User"),
      Transaction = require("./Transaction");

/** Import Database Connection */
const db = require("../Configs/dbconfig");

/** Method Definitions */
module.exports = {
    createUser: async function ({ user_id, password, name, bank, ac_no, balance }) {
        if (typeof balance !== "number")
            balance = 0;
        try {
            await db.sync();
            await User.create({ user_id, password, name, bank, ac_no, balance });
            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    },
    findUser: async function ({ user_id, password }) {
        try {
            await db.sync();
            const user = await User.findOne({
                attributes: [ "user_id" ],
                where: { user_id, password }
            });
            if (user)
                return user.get();
        } catch (e) {
            console.error(e);
        }
        return null;
    },
    getUser: async function ({ user_id }) {
        try {
            await db.sync();
            const user = await User.findOne({
                attributes: [ "user_id", "name", "bank", "ac_no", "balance" ],
                where: { user_id }
            });
            if (user)
                return user.get();
        } catch (e) {
            console.error(e);
        }
        return null;
    },
    getTransaction: async function ({ user_id, offset }) {
        if (typeof offset !== "number")
            offset = 0;
        try {
            await db.sync();
            const trans = await Transaction.findAll({
                where: {
                    [db.Op.or]: [
                        { sender_id: user_id },
                        { reciever_id: user_id }
                    ]
                },
                order: [[ "timestamp", "DESC" ]],
                offset,
                limit: 5
            });
            return trans;
        } catch (e) {
            console.error(e);
            return null;
        }
    },
    makeTransaction: async function ({ sender_id, reciever_id, amount }) {
        try {
            await db.sync();
            await db.transaction()
                .then(async function (t) {
                    return Transaction.create({ sender_id, reciever_id, amount }, { transaction: t })
                        .then(function (trans) {
                            User.findByPk(sender_id).then(function (user) {
                                return user.decrement({ "balance": trans.amount });
                            });
                            User.findByPk(reciever_id).then(function (user) {
                                return user.increment({ "balance": trans.amount });
                            })
                        });
                });
            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    }
};