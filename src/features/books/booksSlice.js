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
        showBooks: (state) => state
    }
});

export const { showBooks } = booksSlice.actions;
export default booksSlice.reducer;