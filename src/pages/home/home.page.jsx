import React from "react";
import CardList from "../../components/card-list/card-list.component";
import "./home.styles.scss";

const homePage = () => {
  return (
    <div className="home">
      <CardList />
    </div>
  );
};

export default homePage;
