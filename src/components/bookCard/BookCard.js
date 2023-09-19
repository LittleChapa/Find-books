import React from 'react';

import './bookCard.scss';

function BookCard({ title, descr, image }) {
  return (
    <div className="bookCard">
      <img className="bookCard__image" src={image} alt="" />
      <div className="bookCard__text">
        <h2 className="bookCard__title">{title}</h2>
        <p className="bookCard__descr">{descr}</p>
      </div>
    </div>
  );
}

export default BookCard;
