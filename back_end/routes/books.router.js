const booksController = require("../controllers/books.controller");
const express = require("express");
const router = express.Router();
const { authJwt } = require("../middlewares");

// add new book
router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  booksController.create
);
// get all books
router.get("/", booksController.getAll);
// get a book by id
router.get("/:id", [authJwt.verifyToken], booksController.getById);
// update a book
router.put(
  "/:id",
  [authJwt.verifyToken, authJwt.isModOrAdmin],
  booksController.update
);
// delete a book
router.delete(
  "/:id",
  [authJwt.verifyToken, authJwt.isAdmin],
  booksController.delete
);

module.exports = router;
