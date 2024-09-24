import React, { useState } from "react";
import { useBooksContext } from "../contexts/BooksContext";
import { useNavigate } from "react-router-dom";
import { format, parseISO } from "date-fns";

const AddBookPage = () => {
  const { addNewBook } = useBooksContext();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    bookName: "",
    quantity: 0,
    bookStatus: "available",
    printingDate: "",
    publisher: "",
    category: "",
    pages: "",
    bookDescription: "",
    bookPrices: 0,
    bookImg: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      ...book,
      printingDate: format(new Date(book.printingDate), "yyyy-MM-dd"),
    };
    addNewBook(newBook);
    navigate("/store");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  return (
    <div className="my-32">
      {" "}
      <h1 className="text-4xl font-bold text-center mb-7">Add page</h1>
      <div className="card bg-base-100 w-full max-w-3xl shadow-2xl mx-auto">
        <form className="card-body">
          <div className="flex flex-row gap-3">
            {" "}
            <div>
              {" "}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book name</span>
                </label>
                <input
                  type="text"
                  placeholder="book name"
                  className="input input-bordered"
                  onChange={handleChange}
                  name="bookName"
                  value={book.bookName}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book description</span>
                </label>
                <input
                  type="text"
                  placeholder="book description"
                  className="input input-bordered"
                  onChange={handleChange}
                  name="bookDescription"
                  value={book.bookDescription}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">In stock</span>
                </label>
                <input
                  type="number"
                  placeholder="book in stock"
                  className="input input-bordered"
                  onChange={handleChange}
                  name="quantity"
                  value={book.quantity}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book status</span>
                </label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  name="bookStatus"
                  value={book.bookStatus}
                  onChange={handleChange}
                  required
                >
                  <option value="available">available</option>
                  <option value="unavailable">unavailable</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book pages</span>
                </label>
                <input
                  type="text"
                  placeholder="book pages"
                  className="input input-bordered"
                  onChange={handleChange}
                  name="pages"
                  value={book.pages}
                  required
                />
              </div>
            </div>
            <div>
              {" "}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book genre</span>
                </label>
                <input
                  type="text"
                  placeholder="book genre"
                  className="input input-bordered"
                  onChange={handleChange}
                  name="category"
                  value={book.category}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Publisher</span>
                </label>
                <input
                  type="text"
                  placeholder="publisher"
                  className="input input-bordered"
                  onChange={handleChange}
                  name="publisher"
                  value={book.publisher}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Printing date</span>
                </label>
                <input
                  type="date"
                  placeholder="printing date"
                  className="input input-bordered"
                  onChange={handleChange}
                  name="printingDate"
                  value={book.printingDate}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book prices</span>
                </label>
                <input
                  type="number"
                  placeholder="book prices"
                  className="input input-bordered"
                  onChange={handleChange}
                  name="bookPrices"
                  value={book.bookPrices}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Book image</span>
                </label>
                <input
                  type="text"
                  placeholder="book image url"
                  className="input input-bordered"
                  onChange={handleChange}
                  name="bookImg"
                  value={book.bookImg}
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Preview image</span>
              </label>
              <img className="w-full" src={book.bookImg} alt="" />
            </div>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-success"
            >
              Add new Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookPage;
