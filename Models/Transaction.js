/** Import CommonJS Module */
const Sequelize = require("sequelize"), 
      database  = require("../Configs/dbconfig");

/** Define Data Model: Transaction */
const Transaction = database.define("Transaction", {
    trans_id:    { type: Sequelize.STRING, primaryKey: true },
    sender_id:   { type: Sequelize.STRING, allowNull: false },
    reciever_id: { type: Sequelize.STRING, allowNull: false },
    amount:      { type: Sequelize.NUMBER, allowNull: false, defaultValue: 0 },
    timestamp:   { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW }
});