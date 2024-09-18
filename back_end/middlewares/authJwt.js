const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const Users = db.Users;

// verify token
verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    res.status(403).send({ message: "No tokens are provided" });
    return;
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

// check user is admin role
isAdmin = (req, res, next) => {
  Users.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].roleName === "admin") {
          next();
          return;
        }
      }
      res.status(401).send({ message: "Administrator role required!" });
    });
  });
};

// check user is moderator
isMod = (req, res, next) => {
  Users.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].roleName === "moderator") {
          next();
          return;
        }
      }
      res.status(401).send({ message: "Moderator role required!" });
    });
  });
};

// check user is admin or moderator
isModOrAdmin = (req, res, next) => {
  Users.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (
          roles[i].roleName === "moderator" ||
          roles[i].roleName === "admin"
        ) {
          next();
          return;
        }
      }
      res
        .status(401)
        .send({ message: "Moderator or Administrator role required!" });
    });
  });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isMod,
  isModOrAdmin,
};

module.exports = authJwt;
