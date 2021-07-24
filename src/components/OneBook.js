import React from 'react';
import { useQuery } from '@apollo/client';
import { GetBookQuery } from '../queries/queries';

function OneBook({ id }) {
  const { loading, error, data } = useQuery(GetBookQuery, {
    variables: { id },
  });
  if (!loading) {
    console.log('data is', data);
  }

  if (loading) return <div>Book is loading...</div>;
  if (error) return <div>Error is {JSON.stringify(error)}</div>;

  return (
    <div className="card">
      <ul>
        Book Details:
        <li>Book Name: {data['book'].name}</li>
        <li>Book Genre: {data['book'].genre}</li>
        <li>Author Name:{data['book'].author.name}</li>
      </ul>
    </div>
  );
}

export default OneBook;
