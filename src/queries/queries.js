import { gql } from '@apollo/client';

const GetBookQuery = gql`
  query ($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        name
      }
    }
  }
`;
const GetBooksQuery = gql`
  query {
    books {
      name
      genre
      author {
        name
      }
    }
  }
`;

const AddBook = gql`
  mutation addBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      author {
        name
      }
    }
  }
`;

const GetAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

export { GetBookQuery, GetBooksQuery, AddBook, GetAuthorsQuery };
