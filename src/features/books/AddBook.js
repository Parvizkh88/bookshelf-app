import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from './booksSlice';
import { useDispatch } from 'react-redux';


const AddBook = () => {
    const [buttonText, setButtonText] = useState("Add Book")
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();

    const dispatch=useDispatch();
    const handlTitleChange=(e)=> {
        setTitle(e.target.value)
    }
    const handlAuthorChange=(e)=> {
        setAuthor(e.target.value)
    }

    const handlSubmit=(e)=>{
        e.preventDefault();
        const newBook ={id:uuidv4(),title,author}
        dispatch(addBook(newBook));
        setTitle("");
        setAuthor("")
        
    }
    return (
        <div>
            <h1>AddBook Form</h1>
            <form action="" onSubmit={handlSubmit}>
                <input type="text" name="title" placeholder="Book Name" value={title} onChange={handlTitleChange} required/>
                <input type="text" name="author" placeholder="Book author" value={author} onChange={handlAuthorChange} required/>
                <button value={buttonText} type="submit">{buttonText}</button>
                <button type="cancel">Cancel</button>
                
            </form>
            </div>
    )
}

export default AddBook