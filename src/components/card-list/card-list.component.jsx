import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../../data";
import Card from "../card/card.component";

export class CardList extends Component {
  render() {
    const ids = Object.keys(data);
    return (
      <div className="card-list">
        {ids.map((id) => (
          <Link
            to={{ pathname: `/news/${id}`, state: id }}
            className="card-wrapper"
          >
            <Card
              key={id}
              photoUrl={data[id].photoUrl}
              headline={data[id].headline}
            />
          </Link>
        ))}
      </div>
    );
  }
}

export default CardList;
