import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from './booksSlice';

const Book = () => {

  const { books } = useSelector((state) => (state.booksR));
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    // console.log(dd);
    dispatch(deleteBook(id))
  }
  // alert(JSON.stringify(books, null, 4));
  const renderBooksElement = books.map((book) => {
    const { id, title, author } = book;
    return (
      <div key={id} className='showBooks'>
        <h3>{title}</h3>
        <h3>{author}</h3>
        <button>Edit</button>
        <button onClick={() => handleDelete(id)}>Delete</button>
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

