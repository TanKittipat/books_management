const Users = require("./users.model");
const Roles = require("./roles.model");
const sequelize = require("./db");
const Sequelize = require("sequelize");

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = Users;
db.Roles = Roles;

db.Users.belongsToMany(db.Roles, {
  through: "User_Roles",
});
db.Roles.belongsToMany(db.Users, {
  through: "User_Roles",
});

module.exports = db;
