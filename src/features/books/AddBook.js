import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from './booksSlice';
// import { updateBook } from './booksSlice';
// import { useLocation } from 'react-router-dom';

const AddBook = () => {
    // const { state } = useLocation();


    // const [id, setId] = useState(state.id);
    // console.log(state.id);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    // const [isEdit, setIsEdit] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        //----------------add edit book functionality starts here
        // const updatedBook = { id, title, author };
        // if (dispatch(updateBook(updatedBook))) {
        //     setIsEdit(true);
        // };
        //----------------add edit book functionality starts here
        const newBook = { id: uuidv4(), title, author };
        dispatch(addBook(newBook));
        setTitle('');
        setAuthor('');
        navigate('/show-book');

    };
    const handleCancel = () => {
        navigate('/show-book')
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
                {/* <button type="submit"
                    className={`${isEdit ? 'valid' : 'invalid'}`}>Update Book</button> */}
                <button onClick={handleCancel}>Cancel</button>

            </form>
        </div>

    )
}

export default AddBook;