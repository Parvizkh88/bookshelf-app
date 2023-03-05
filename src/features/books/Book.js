import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from './booksSlice';
import { Link } from 'react-router-dom';

const Book = () => {

  const { books } = useSelector((state) => (state.booksR));
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBook(id))
  }
  const renderBooksElement = books.map((book) => {
    const { id, title, author } = book;
    return (
      <div key={id} className='showBooks'>
        <h3>{title}</h3>
        <h3>{author}</h3>
        <Link to='/edit-book' state={{ id, title, author }}>
          <button>Edit</button>
        </Link>

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

