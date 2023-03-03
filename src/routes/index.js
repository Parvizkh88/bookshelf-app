import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import EditBook from '../features/books/EditBook';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Footer from '../layouts/Footer';
import Navbar from '../layouts/Navbar';
import Book from '../features/books/Book';
import AddBook from '../features/books/AddBook';

const Index = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <main className='main'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/edit-book' element={<EditBook />} />
                    <Route path='/show-book' element={<Book />} />
                    <Route path='/add-book' element={<AddBook />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default Index;