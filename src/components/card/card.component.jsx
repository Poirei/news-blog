import React from "react";
import "./card.styles.scss";

const card = ({ photoUrl, headline }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={photoUrl} alt="news" className="card__img" />
      </div>
      <div className="title-container">
        <h3 className="card__title">{headline}</h3>
      </div>
    </div>
  );
};

export default card;
