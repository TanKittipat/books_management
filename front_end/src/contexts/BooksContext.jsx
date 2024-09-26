import { createContext, useContext, useEffect, useState } from "react";
import BookServices from "../services/books.service";
import Swal from "sweetalert2";

export const BooksContext = createContext();
export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const fetchBook = async () => {
    try {
      const response = await BookServices.getAllBooks();
      if (response.status === 200) {
        setBooks(response.data);
        setFilteredBooks(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBook();
  }, []);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const addNewBook = async (book) => {
    try {
      const response = await BookServices.addBook(book);
      if (response.status === 200) {
        setBooks((prev) => [...prev, response.data]);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Add new book",
          text: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateBookData = async (id, updatedBook) => {
    try {
      const response = await BookServices.updateBook(id, updatedBook);
      if (response.status === 200) {
        setBooks((prev) =>
          prev.map((book) => {
            if (book.id === id) {
              return updatedBook;
            } else {
              return book;
            }
          })
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Update a book",
          text: response.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      fetchBook();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTheBook = async (id) => {
    try {
      const response = await BookServices.deleteBook(id);
      if (response.status === 200) {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#D91656",
          cancelButtonColor: "#B7B7B7",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            setBooks((prev) => prev.filter((book) => book.id !== id));
            Swal.fire({
              title: "Deleted!",
              text: response.data.message,
              icon: "success",
            });
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTheBookbyId = async (id) => {
    try {
      const response = await BookServices.getBookbyId(id);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BooksContext.Provider
      value={{
        books,
        filteredBooks,
        setFilteredBooks,
        getTheBookbyId,
        addNewBook,
        updateBookData,
        deleteTheBook,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooksContext = () => useContext(BooksContext);
