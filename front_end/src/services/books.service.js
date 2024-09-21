import api from "./api";

const booksURL = import.meta.env.VITE_BOOKS_URL;

const getAllBooks = async () => {
  return await api.get(booksURL);
};

const getBookbyId = async (id) => {
  return await api.get(booksURL + `/${id}`);
};

const updateBook = async (id, book) => {
  return await api.put(booksURL + `/${id}`, book);
};

const deleteBook = async (id) => {
  return await api.delete(booksURL + `/${id}`);
};

const addBook = async (book) => {
  return await api.post(booksURL, book);
};

const BookServices = {
  getAllBooks,
  getBookbyId,
  addBook,
  deleteBook,
  updateBook,
};

export default BookServices;
