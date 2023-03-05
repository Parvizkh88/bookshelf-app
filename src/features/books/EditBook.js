import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { updateBook } from './booksSlice';

const EditBook = () => {
    const { state } = useLocation();
    console.log(state);
    const dispatch = useDispatch();

    const [id, setId] = useState(state.id);
    const [title, setTitle] = useState(state.title);
    const [author, setAuthor] = useState(state.author);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedBook = { id, title, author };
        dispatch(updateBook(updatedBook))
        setTitle('');
        setAuthor('');
    };

    return (
        <div>
            <h2>Edit Book</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">title: </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                    placeholder='Book Title' required />
                <label htmlFor="author">author: </label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}
                    placeholder='Book Author' required />
                <button type="submit">Update Book</button>
            </form>
        </div>
    )
}

export default EditBook