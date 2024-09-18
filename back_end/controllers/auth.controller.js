const config = require("../config/auth.config");
const db = require("../models");
const Users = db.Users;
const Roles = db.Roles;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");

// signup
exports.signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res
      .status(400)
      .send({ message: "Please fill in all required information." });
    return;
  }
  const newUser = {
    username: username,
    email: email,
    password: bcrypt.hashSync(password, 12),
  };
  //   save user to database
  await Users.create(newUser)
    .then((user) => {
      if (req.body.roles) {
        Roles.findAll({
          where: { roleName: { [Op.or]: req.body.roles } },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({
              message: "User registration completed successfully.",
            });
          });
        });
      } else {
        user.setRoles([1]).then(() => {
          res.send({ message: "User registration completed successfully." });
        });
      }
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message || "Something happened while registering a new user.",
      });
    });
};

// signin
exports.signin = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res
      .status(400)
      .send({ message: "Please fill in all required information." });
    return;
  }
  await Users.findOne({ where: { username: username } })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User not found." });
      }
      // hash input password and compare to user password in database
      const passwordIsValid = bcrypt.compareSync(password, user.password);
      // Check password
      if (!passwordIsValid) {
        return res
          .status(401)
          .send({ message: "Invalid password.", accessToken: null });
      }
      // create token
      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400,
      });
      const authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLES_" + roles[i].roleName.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((error) => {
      res.status(500).send({
        message:
          "Something happened while the user was logged in." || error.message,
      });
    });
};
