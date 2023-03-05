import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from './booksSlice';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = { id: uuidv4(), title, author };
        dispatch(addBook(newBook));
        navigate('/show-book');
    }

    return (
        <div>
            <h1>AddBook Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">title: </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                    placeholder='Book Title' required />
                <label htmlFor="author">autho: </label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}
                    placeholder='Book Author' required />
                <button type="submit">Add Book</button>
            </form>
        </div>

    )
}

export default AddBook;