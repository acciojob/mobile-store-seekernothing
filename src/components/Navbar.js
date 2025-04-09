import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="/admin">
            ADMIN
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
