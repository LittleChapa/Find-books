import React, { useEffect, useState } from 'react';
import BooksService from './services/BooksService';

import './styles/style.scss';
import BookCard from './components/bookCard/BookCard';
import Skeleton from './components/skeleton/Skeleton';

function App() {
  const booksService = new BooksService();

  const [inputValue, setInputValue] = useState('');
  const [booksInfo, setBooksInfo] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(10);

  const skeletons = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ];

  useEffect(() => {
    onSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]); 

  const onChange = (e) => {
    setStartIndex(10)
    setInputValue((inputValue) => (inputValue = e.target.value));
  };

  const onSearch = () => {
    setIsError(false);
    setIsLoading(true);
    booksService.getSearchBooks(inputValue, 0).then(onLoadedBooks).catch(onError);
  };

  const onLoadedBooks = (newBooks) => {
    setBooksInfo((books) => (books = newBooks));
    setIsLoading(false);
  };

  const newBooks = (newBooks) => {
    setBooksInfo((books) => [...books, ...newBooks]);
  };

  const onError = (e) => {
    console.log(e);
    setBooksInfo([]);
    setIsError(true);
  };

  const onBtn = () => {
    setStartIndex((startIndex) => startIndex + 10);
    booksService.getSearchBooks(inputValue, startIndex).then(newBooks).catch(onError);
    console.log(booksInfo);
  };

  const books =
    !isLoading && !isError
      ? booksInfo.map((item) => {
          return <BookCard key={item.id} title={item.title} descr={item.descr} image={item.image} />;
        })
      : null;
  const loading =
    isLoading && !isError
      ? skeletons.map(({ id }) => {
          return <Skeleton key={id} />;
        })
      : null;
  const error = isError && !isLoading ? <p className="app__error">Книг не найдено!</p> : null;

  return (
    <div className="app">
      <div className="container">
        <div className="app__inner">
          <h1 className="app__title">Searching books</h1>
          <input
            value={inputValue}
            onChange={onChange}
            className="app__input"
            type="text"
            placeholder="Search books..."
          />
          <div className="app__books">
            {inputValue ? books : null}
            {inputValue ? loading : null}
            {inputValue ? error : null}
          </div>
          {inputValue ? (
            <button onClick={onBtn} className="app__btn">
              More
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
