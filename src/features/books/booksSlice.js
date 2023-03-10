import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialBooks = {
    books: [
        { id: uuidv4(), title: 'Compond Effect', author: 'Daren Hardy' },
        { id: uuidv4(), title: '12 Rules of Life', author: 'Jordan Peterson' }
    ]
};

export const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state) => state,
        deleteBook: (state, action) => {
            const id = action.payload
            state.books = state.books.filter(book => book.id !== id);
        },
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        updateBook: (state, action) => {
            const { id, title, author } = action.payload;
            // console.log(action.payload);
            const book = state.books.filter(book => book.id === id);
            if (book) {
                book[0].title = title;
                book[0].author = author;
            }
        }
    }
});

export const { showBooks, deleteBook, addBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;