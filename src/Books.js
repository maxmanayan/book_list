import React from "react";
import Book from "./Book";


const Books = (props) => {
  const {books, deleteBook} = props

  const renderBooks = () => {
    return books.map((book) => {
      return <Book key={book.isbn} {...book} deleteBook={deleteBook}/>
    })
  }

  return(
    <div>
      <h1>All Books Here</h1>
      {renderBooks()}
    </div>
  )
}


export default Books;