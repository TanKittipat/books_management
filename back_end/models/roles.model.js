const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const Roles = sequelize.define("Roles", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  roleName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Roles;
