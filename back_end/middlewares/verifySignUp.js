const Users = require("../models/users.model");
const Roles = require("../models/roles.model");
const { Op } = require("sequelize");

// Check username or email is duplicated?
checkDuplicatedUser = async (req, res, next) => {
  await Users.findOne({ where: { username: req.body.username } }).then(
    (user) => {
      if (user) {
        return res.status(400).send({ message: "Username already exists!" });
      }
      Users.findOne({ where: { email: req.body.email } }).then((user) => {
        if (user) {
          return res.status(400).send({ message: "Email already used!" });
        }
        next();
      });
    }
  );
};

// Check that user input role correctly
checkExistingRoles = async (req, res, next) => {
  if (req.body.roles) {
    Roles.findAll({ where: { roleName: { [Op.or]: req.body.roles } } }).then(
      (roles) => {
        if (roles.length != req.body.roles.length) {
          return res.status(400).send({ message: "The role doesn't exist" });
        }
        next();
      }
    );
  } else {
    next();
  }
};

const verifySignUp = {
  checkDuplicatedUser,
  checkExistingRoles,
};

module.exports = verifySignUp;
