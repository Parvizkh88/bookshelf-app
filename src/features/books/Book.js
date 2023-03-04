import React from 'react';
import { useSelector } from 'react-redux';

const Book = () => {

  const { books } = useSelector((state) => (state.booksR));
  // alert(JSON.stringify(books, null, 4));
  const renderBooksElement = books.map((book) => {
    const { id, title, author } = book;
    return (
      <div key={id} className='showBooks'>
        <h3>{title}</h3>
        <h3>{author}</h3>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    )
  });

  return (
    <div>
      <h2 style={{ marginLeft: '40rem' }}>List of Books</h2>
      <div className='booksCollection'>
        {renderBooksElement}
      </div>

    </div>
  )
}

export default Book

