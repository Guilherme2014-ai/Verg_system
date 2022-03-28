import React from "react";
import { Link } from "react-router-dom";
import INavOption from "../interfaces/INavOption";

import "./NavComponent.css";

const NavComponent = ({ list }: { list: INavOption[] }) => {
  return (
    <nav className="nav">
      <h1 className="nav_title">SV</h1>
      <div className="options">
        {list &&
          list.map((option) => (
            <Link to={option.link}>
              <h2 className="nav_option">{option.title}</h2>
            </Link>
          ))}
      </div>
    </nav>
  );
};

export { NavComponent };
