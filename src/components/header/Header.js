import React from "react";
import { Link } from "react-router-dom";
import ROUTE_PATH from "../../constants/Routes";
import "./header.scss";
export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to={ROUTE_PATH.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTE_PATH.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={ROUTE_PATH.CONTACT}>Contact</Link>
          </li>
          <li>
            <Link to={ROUTE_PATH.PROFILE}>Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
