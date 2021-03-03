import React, {useState} from "react";


const BookForm = (props) => {
  const {addBook} = props
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const submitForm = (input) => {
    console.log(input)

    input.preventDefault()
    console.log(title)
    console.log(author)

    addBook({title: title, author: author})
    // setTitle("")
    // setAuthor("")
  }
  return(
    <div>
      <h1>New Book</h1>
      <form onSubmit={submitForm}>
        <p>Title</p>
        <input value={title} onChange={(input)=>{setTitle(input.target.value)}}/>

        <p>Author</p>
        <input value={author} onChange={(input)=>{setAuthor(input.target.value)}}/>
        
        <button type="submit">Add</button>
      </form>
    </div>
  )
}


export default BookForm;