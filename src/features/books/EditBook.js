import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import { useParams  } from 'react-router-dom';
import { updateBook } from './booksSlice';
// add book imports starts here
import { addBook } from './booksSlice';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router';
// add book imports finishes here

const EditBook = () => {
    const { state } = useLocation();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [id, setId] = useState(state?.id);
    const [title, setTitle] = useState(state?.title);
    const [author, setAuthor] = useState(state?.author);
    const [isAdd, setIsAdd] = useState(false);

    // const addOrEdit = ()=>{
    //     if (match.params.activePage == 1)
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedBook = { id, title, author };
        dispatch(updateBook(updatedBook))
        setTitle('');
        setAuthor('');
        navigate('/show-book')
    };

    // add book starts here
    const handleSubmitAdd = () => {
        const newBook = { id: uuidv4(), title, author };
        dispatch(addBook(newBook));
    };
    // add book finishes here

    const handleCancel = () => {
        navigate('/show-book')
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
            {/* add book form starts here */}
            <h2 className={`${isAdd ? 'valid' : 'invalid'}`}>Add Book</h2>
            <form onSubmit={handleSubmitAdd} className={`${isAdd ? 'valid' : 'invalid'}`}>
                <label htmlFor="title">title: </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                    placeholder='Book Title' required />
                <label htmlFor="author">author: </label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}
                    placeholder='Book Author' required />
                <button type="submit">Add Book</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
            {/* add book form finishes here */}

        </div>
    )
}

export default EditBook