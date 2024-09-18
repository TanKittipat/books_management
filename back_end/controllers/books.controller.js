const Books = require("../models/books.model");

// create a new book and save to db
exports.create = async (req, res) => {
  const {
    bookName,
    quantity,
    bookStatus,
    printingDate,
    publisher,
    category,
    pages,
    bookDescription,
    bookPrices,
    bookImg,
  } = req.body;

  //   validate data
  if (
    !bookName ||
    !quantity ||
    !bookStatus ||
    !printingDate ||
    !publisher ||
    !category ||
    !pages ||
    !bookDescription ||
    !bookPrices ||
    !bookImg
  ) {
    res.status(400).send({ message: "Please provide all fields." });
  }
  await Books.findOne({ where: { bookName: bookName } }).then((book) => {
    if (book) {
      res.status(400).send({ message: "The book already exists." });
      return;
    }

    // create a new book
    const newBook = {
      bookName,
      quantity,
      bookStatus,
      printingDate,
      publisher,
      category,
      pages,
      bookDescription,
      bookPrices,
      bookImg,
    };

    Books.create(newBook)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.status(500).send({
          message:
            "An error occurred while adding a new book." || error.message,
        });
      });
  });
};

// get all books
exports.getAll = async (req, res) => {
  await Books.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: "An error occurred while getting all books." || error.message,
      });
    });
};

// get book by id
exports.getById = async (req, res) => {
  const id = req.params.id;
  await Books.findByPk(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Can't find the book id: ${id}. Maybe the book doesn't actually exist.`,
        });
        return;
      }
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message: "An error occurred while getting a book." || error.message,
      });
    });
};

// edit the book
exports.update = async (req, res) => {
  const id = req.params.id;
  await Books.update(req.body, { where: { id: id } }).then((num) => {
    if (num == 1) {
      res.send({ message: `Book id: ${id} has been updated.` });
    } else {
      res.send({
        message: `Unable to update book id: ${id}, either because the book doesn't exist or req.body is empty.`,
      });
    }
  });
};

// delete a book
exports.delete = async (req, res) => {
  const id = req.params.id;
  await Books.destroy({ where: { id: id } }).then((num) => {
    if (num == 1) {
      res.send({ message: `Book id: ${id} deleted successfully.` });
    } else {
      res.send({ message: `Unable to delete book id: ${id}` });
    }
  });
};
