import React, { useState } from 'react';
import BooksService from './services/BooksService';

import './styles/style.scss';
import BookCard from './components/bookCard/BookCard';

function App() {
  const booksService = new BooksService();

  const [inputValue, setInputValue] = useState('');
  const [booksInfo, setBooksInfo] = useState([]);

  // console.log(booksInfo);

  const takeInputValue = (e) => {
    setInputValue((inputValue) => (inputValue = e.target.value));
    if (!e.target.value) return;

    booksService.getSearchBooks(e.target.value).then(onLoadedBooks).catch(onError);

    // console.log(e.target.value);
    // console.log(inputValue);
  };

  const onLoadedBooks = (newBooks) => {
    setBooksInfo((books) => (books = newBooks));
  };

  const onError = () => {
    console.log('Массив пуст');
    setBooksInfo([]);
  };

  return (
    <div className="app">
      <div className="container">
        <div className="app__inner">
          <h1 className="app__title">Searching books</h1>
          <input
            value={inputValue}
            onChange={takeInputValue}
            className="app__input"
            type="text"
            placeholder="Search books..."
          />
          <div className="app__books">
            {booksInfo.map((item) => {
              return <BookCard key={item.id} title={item.title} descr={item.descr} image={item.image} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
