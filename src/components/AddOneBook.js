import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { AddBook, GetBooksQuery } from '../queries/queries';
import './AddOneBook.css';

// function BookList(props) {
//   let inputName;
//   let inputGenre;
//   let inputAuthorId;
//   const [addBook, { data }] = useMutation(AddBook);

//   return (
//     <div className="container">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           addBook({
//             variables: {
//               name: inputName.value,
//               genre: inputGenre.value,
//               authorId: inputAuthorId.value,
//             },
//           });

function AddOneBook(props) {
  const [addBook, { data }] = useMutation(AddBook);
  const { loading, error, data: booklist } = useQuery(GetBooksQuery);

  let bookName;
  let bookGenre;
  let authorId;
  const addBookByClick = async (e) => {
    e.preventDefault();
    await addBook({
      variables: {
        name: bookName.value,
        genre: bookGenre.value,
        authorId: authorId.value,
      },
    });

    e.target.reset();
  };
  return (
    <div className="add_container">
      <div className="input_area">
        <form onSubmit={(e) => addBookByClick(e)}>
          <h3>Add a new book</h3>
          <div>
            <label>Book Name:</label>
            <input
              placeholder="enter book name"
              type="text"
              ref={(node) => (bookName = node)}
            />
          </div>
          <div>
            <label>Book Genre:</label>
            <input
              placeholder="enter book genre"
              type="text"
              ref={(node) => (bookGenre = node)}
            />
          </div>
          <div>
            <label>Author Id:</label>
            <input
              placeholder="enter author id"
              type="text"
              ref={(node) => (authorId = node)}
            />
          </div>
          <div>
            <small>60fb5e9216313d8298f0799a</small>
          </div>
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="show_area">
        <h3>Show Latest Book List</h3>
        {booklist && (
          <ol>
            {booklist['books'].map((book) => (
              <li key={book.id}>
                {book.name} {book.genre} by <strong>{book.author.name}</strong>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default AddOneBook;
