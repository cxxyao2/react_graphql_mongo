import React from 'react';
import { useQuery } from '@apollo/client';
import { GetBooksQuery } from '../queries/queries';
import './BookList.css';

function BookList() {
  const {
    loading,
    error: loadingError,
    data: queryData,
  } = useQuery(GetBooksQuery);
  if (loading) return <div>Book List is loa</div>;
  if (loadingError) return <div>{JSON.stringify(loadingError)}</div>;

  return (
    <div className="container">
      <div>
        <h1>Book List</h1>

        {queryData && (
          <ul>
            {queryData['books'].map((book) => (
              <li key={book.id}>
                {book.name} {book.genre} by <strong>{book.author.name}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default BookList;
