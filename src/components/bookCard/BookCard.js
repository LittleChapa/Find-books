import React from 'react';

import './bookCard.scss';

function BookCard({ title, descr, image }) {
  const getTitle = () => {
    if (!title) return;
    let newTitle = title.slice(0, 15);
    if (newTitle.length < title.length) {
      newTitle += '...';
    }
    return newTitle;
  };

  const getDescr = () => {
    if (!descr) return;
    let newDescr = descr.slice(0, 60);
    if (newDescr.length < descr.length) {
      newDescr += '...';
    }
    return newDescr;
  };
  return (
    <div className="bookCard">
      <img className="bookCard__image" src={image} alt="" />
      <div className="bookCard__text">
        <h2 className="bookCard__title">{getTitle()}</h2>
        <p className="bookCard__descr">{getDescr()}</p>
      </div>
    </div>
  );
}

export default BookCard;
