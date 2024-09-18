const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const booksRouter = require("./routes/books.router");
const db = require("./models");
const role = require("./models/roles.model");
const authRouter = require("./routes/auth.router");

const corsOptions = {
  origin: process.env.corsConnect,
};

// Dev mode
// db.sequelize.sync({ force: true }).then(() => {
//   initRole();
//   console.log("Drop & sync database!");
// });

const initRole = () => {
  role.create({ id: 1, roleName: "user" });
  role.create({ id: 2, roleName: "moderator" });
  role.create({ id: 3, roleName: "admin" });
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use router
app.use("/api/v1/books", booksRouter);
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.send("<h1>Hello, world!!!</h1><p>This is library management API.</p>");
});

app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
});
