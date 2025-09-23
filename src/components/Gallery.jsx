import React from 'react';

const books = [
  { title: "Sapiens", image: "https://covers.openlibrary.org/b/id/8165261-L.jpg" },
  { title: "Homo Deus", image: "https://covers.openlibrary.org/b/id/8165262-L.jpg" },
  { title: "21 Lessons for the 21st Century", image: "https://covers.openlibrary.org/b/id/8165263-L.jpg" }
];

export default function Gallery() {
  return (
    <section style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      {books.map((book) => (
        <div key={book.title} style={{ textAlign: 'center' }}>
          <img src={book.image} alt={book.title} style={{ width: '150px', height: '220px', objectFit: 'cover', borderRadius: '8px' }} />
          <p>{book.title}</p>
        </div>
      ))}
    </section>
  );
}