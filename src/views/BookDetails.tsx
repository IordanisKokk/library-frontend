// src/pages/BookDetails.js
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { state: { book } } = location;
  console.log(book)
  // Fetch book details based on the id
  // For simplicity, you can fetch details from your API

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Book ID: {id}</p>

      {/* Include more details here based on your book object */}
    </div>
  );
};

export default BookDetails;
