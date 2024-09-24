import React, { useEffect, useState } from "react";
import { useBooksContext } from "../contexts/BooksContext";

// Debounce function
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const SearchBar = () => {
  const { books, setFilteredBooks } = useBooksContext();
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword, 300); // Debounce for 300ms

  const handleChange = async (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (debouncedKeyword === "") {
      setFilteredBooks(books);
    } else {
      const result = books.filter((book) => {
        return (
          book.bookName
            .toLowerCase()
            .includes(debouncedKeyword.toLowerCase()) ||
          book.bookDescription
            .toLowerCase()
            .includes(debouncedKeyword.toLowerCase())
        );
      });
      setFilteredBooks(result);
    }
  }, [debouncedKeyword, books, setFilteredBooks]);

  return (
    <div>
      <label className="input input-bordered flex items-center gap-2 input-sm">
        <input
          type="text"
          onChange={handleChange}
          className="grow"
          placeholder="Search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </label>
    </div>
  );
};

export default SearchBar;
