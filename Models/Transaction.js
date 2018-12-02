/** Import CommonJS Module */
const db = require("../Configs/dbconfig");

/** Define Data Model: Transaction */
module.exports = db.define("transaction", {
    trans_id: {
        type: db.Sequelize.STRING,
        primaryKey: true,
        defaultValue: db.Sequelize.UUIDV4
    },
    sender_id:   { type: db.Sequelize.STRING, allowNull: false },
    reciever_id: { type: db.Sequelize.STRING, allowNull: false },
    amount: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        validate: {
            isInt: true
        }
    },
    timestamp: {
        type: db.Sequelize.DATE,
        allowNull: false,
        defaultValue: db.Sequelize.NOW,
        validate: {
            isDate: true
        }
    }
});