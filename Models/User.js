/** Import CommonJS Module */
const Sequelize = require("sequelize"), 
      database  = require("../Configs/dbconfig");

/** Define Data Model: User */
const User = database.define("User", {
    user_id:  { type: Sequelize.STRING, primaryKey: true },
    password: { type: Sequelize.STRING, allowNull: false },
    name:     { type: Sequelize.STRING, allowNull: false },
    bank:     { type: Sequelize.STRING, allowNull: false },
    ac_no:    { type: Sequelize.STRING, allowNull: false },
    upi:      { type: Sequelize.STRING, unique: true },
    balance:  {
        type: Sequelize.NUMBER,
        allowNull: false,
        defaultValue: 0,
        validate: {
            isInt: true
        }
    }
});