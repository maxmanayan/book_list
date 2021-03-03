import React from "react"


const Book = (props) => {
  const {deleteBook, title, author, genre, description, isbn, image, published, publisher} = props
  return (
    <div style={{border: '1px solid black', margin: '20px'}}>
      <p>{isbn}</p>
      <h1>{title}</h1>
      <h2>by {author}</h2>
      <p>{genre}</p>
      <p style={{fontStyle: 'italic'}}>"{description}"</p>
      <p>{image}</p>
      <p>Published by {publisher} - {published}</p>
      <button onClick={() => deleteBook(isbn)}>Delete "{title}"</button>
    </div>
  )
}



export default Book;