
import './App.css';
import React, {useState, useEffect} from "react";
import Books from "./Books";
import Axios from "axios";
import BookForm from "./BookForm";




function App() {
  const [books, setBooks] = useState([])

  const getLib = async () => {
    try {
      let library = await Axios.get('https://fakerapi.it/api/v1/books?_quantity=5')

      setBooks(library.data.data)
    } catch(err) {
      console.log(err)
    }
  } 

  useEffect(() => {getLib()},[])

  const addBook = (book) => {
    console.log(book)
    let id = Math.random()
    let bookID = {...book, isbn: id}
    setBooks([bookID, ...books])
    // return <Book {...book} title={book.title} author={book.author}/>
  }


  const deleteBook = (isbn) => {
    console.log(books)
    let filterBooks = books.filter(book => book.isbn !== isbn)
    setBooks(filterBooks)
    console.log(filterBooks)
  }

  return (
    <div className="App" style={{background: 'aliceblue'}}>
      <h1>Book List</h1>
      <BookForm addBook={addBook}/>
      <Books books={books} deleteBook={deleteBook}/>
    </div>
  );
}

export default App;
