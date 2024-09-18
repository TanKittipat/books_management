const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const Books = sequelize.define("Books", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  bookName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bookStatus: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  printingDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  publisher: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pages: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bookDescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bookPrices: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  bookImg: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Books.sync({ force: false })
  .then(() => {
    console.log("A table that has been created or already exists");
  })
  .catch((error) => {
    console.log("An error occurred with : ", error);
  });

module.exports = Books;
