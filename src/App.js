import React, { useState } from 'react';
import BooksService from './services/BooksService';

import './styles/style.scss';

function App() {
  const booksService = new BooksService();
  booksService.getAllBooks('React').then((res) => console.log(res));
  const [inputValue, setInputValue] = useState('');

  const [books, setBooks] = useState([
    {
      id: 1,
      title: '1',
      descr: '1',
    },
    {
      id: 2,
      title: '2',
      descr: '2',
    },
  ]);

  // booksService.getAllBooks(inputValue).then((res) => console.log(res.items));

  const takeInputValue = (e) => {
    setInputValue((inputValue) => e.target.value);
    if (!e.target.value) return;

    booksService.getAllBooks(e.target.value).then((res) => console.log(res));

    console.log(e.target.value);
    console.log(inputValue);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="app__inner">
          <h1 className="app__title">Searching books</h1>
          <input
            className="app__input"
            type="text"
            placeholder="Search books..."
            value={inputValue}
            onChange={takeInputValue}
          />
          <p>Books titles: </p>
          <div className="app__books"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
