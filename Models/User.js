/** Import CommonJS Module */
const db = require("../Configs/dbconfig");

/** Define Data Model: User */
module.exports = db.define("user", {
    user_id:  { type: db.Sequelize.STRING, primaryKey: true },
    password: { type: db.Sequelize.STRING, allowNull: false },
    name:     { type: db.Sequelize.STRING, allowNull: false },
    bank:     { type: db.Sequelize.STRING, allowNull: false },
    ac_no:    { type: db.Sequelize.STRING, allowNull: false },
    upi:      {
        type: db.Sequelize.STRING,
        unique: true,
        defaultValue: db.Sequelize.UUIDV4
    },
    balance:  {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            isInt: true
        }
    }
});