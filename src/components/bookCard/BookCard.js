import React from 'react';

import './bookCard.scss';

function BookCard({ title, descr, image }) {
  const something = () => {
    if (!descr) return;
    let newDescr = descr.slice(0, 100);
    if (newDescr.length < descr.length) {
      newDescr += '...';
    }
    return newDescr;
  };
  return (
    <div className="bookCard">
      <img className="bookCard__image" src={image} alt="" />
      <h2 className="bookCard__title">{title}</h2>
      <p className="bookCard__descr">{something()}</p>
    </div>
  );
}

export default BookCard;
