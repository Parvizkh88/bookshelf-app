import React from 'react';
import { useSelector } from 'react-redux';

const Book = () => {

  const { books } = useSelector((state) => (state.booksR));
  alert(JSON.stringify(books, null, 4));
  return (
    <div>
      <h2>List of Books</h2>
    </div>
  )
}

export default Book

