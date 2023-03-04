import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from './booksSlice';

const Book = () => {

  const disptch=useDispatch();
  const { books } = useSelector((state) => (state.booksR));
  const handleDeleteBook=(id)=>{
   disptch(deleteBook(id))

  };
  const allBooks = books.map((bookData)=>{
    
    return (<tr key={bookData.id}>
      <td>{bookData.title}</td>
      <td>{bookData.author}</td>
      <td>
        <button>Edit</button>
        <button  onClick={()=>{handleDeleteBook(bookData.id)}}>Delete</button>
      </td>
    </tr>)
  })
  return (
    <div>
      <h2>List of Books</h2>
      <table>
        <thead> 
        {allBooks}
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  )
}

export default Book

