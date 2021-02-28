import React from "react";
import "./news.styles.scss";
import data from "../../data";

const News = (props) => {
  const { id } = props.match.params;

  return (
    <div className="news">
      <h2 className="news__headline">{data[id].headline}</h2>
      <img src={data[id].photoUrl} alt="news" className="news__img" />
      <p className="news__description">{data[id].description}</p>
    </div>
  );
};

export default News;
