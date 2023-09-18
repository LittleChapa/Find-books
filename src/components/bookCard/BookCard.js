import React from 'react';

import './bookCard.scss';

function BookCard({ title, descr, image }) {
  const getText = (text, num) => {
    if (!text) return;
    let newText = text.slice(0, num);
    if (newText.length < text.length && text.length - newText.length >= 5) {
      newText += '...';
    }
    return newText;
  };

  // const getTitle = () => {
  //   if (!title) return;
  //   let newTitle = title.slice(0, 15);
  //   if (newTitle.length < title.length) {
  //     newTitle += "...";
  //   }
  //   return newTitle;
  // };

  // const getDescr = () => {
  //   if (!descr) return;
  //   let newDescr = descr.slice(0, 60);
  //   if (newDescr.length < descr.length) {
  //     newDescr += "...";
  //   }
  //   return newDescr;
  // };
  return (
    <div className="bookCard">
      <img className="bookCard__image" src={image} alt="" />
      <div className="bookCard__text">
        <h2 className="bookCard__title">{getText(title, 10)}</h2>
        <p className="bookCard__descr">{getText(descr, 35)}</p>
      </div>
    </div>
  );
}

export default BookCard;
