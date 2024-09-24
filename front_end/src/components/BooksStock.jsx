import React from "react";
import { useBooksContext } from "../contexts/BooksContext";
import BookCard from "./BookCard";

const BooksStock = () => {
  const { filteredBooks } = useBooksContext();
  return (
    <div className="container flex flex-row flex-wrap items-center mx-auto justify-center gap-4 my-24">
      {filteredBooks &&
        filteredBooks.map((book) => {
          return (
            <BookCard
              key={book.id}
              id={book.id}
              name={book.bookName}
              genre={book.category}
              price={book.bookPrices}
              img={book.bookImg}
              status={book.bookStatus}
              description={book.bookDescription}
            />
          );
        })}
    </div>
  );
};

export default BooksStock;
