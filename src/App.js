import React, { useState } from "react";
import BooksService from "./services/BooksService";

import "./styles/style.scss";

function App() {
  const booksService = new BooksService();

  const [inputValue, setInputValue] = useState("");
  const [booksInfo, setBooksInfo] = useState([]);

  // console.log(booksInfo);

  const takeInputValue = (e) => {
    setInputValue((inputValue) => (inputValue = e.target.value));
    if (!e.target.value) return;

    booksService.getSearchBooks(e.target.value).then((res) => setBooksInfo(res));

    // console.log(e.target.value);
    // console.log(inputValue);
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
          <p>Books titles: </p>
          <div className="app__books"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
