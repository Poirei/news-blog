import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/news.svg";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="navigation">
        <Link className="nav-link" to="/trending">
          Trending
        </Link>
        <Link className="nav-link" to="/archive">
          Archive
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default header;
