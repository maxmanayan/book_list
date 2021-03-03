import React, {useState} from "react";


const BookForm = (props) => {
  const {addBook} = props
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [publisher, setPublisher] = useState('')
  const [published, setPublished] = useState('')

  const submitForm = (event) => {
    // prevents page from auto-refreshing after form submission
    event.preventDefault()

    addBook({title: title, author: author, genre: genre, publisher: publisher, published: published})

    // clears inputs after form submits
    setTitle("")
    setAuthor("")
    setGenre("")
    setPublisher("")
    setPublished("")
  }
  return(
    <div>
      <h1>New Book</h1>
      <form onSubmit={submitForm}>
        <p>Title</p>
        <input value={title} onChange={(event)=>{setTitle(event.target.value)}}/>

        <p>Author</p>
        <input value={author} onChange={(event)=>{setAuthor(event.target.value)}}/>

        <p>Genre</p>
        <input value={genre} onChange={(event)=>{setGenre(event.target.value)}}/>
        
        <p>Publisher</p>
        <input value={publisher} onChange={(event)=>{setPublisher(event.target.value)}}/>

        <p>Date Published "yyyy-mm-dd"</p>
        <input value={published} onChange={(event)=>{setPublished(event.target.value)}}/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}


export default BookForm;