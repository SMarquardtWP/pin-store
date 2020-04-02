import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar" className="text-center pb-5 pt-3">
        <Link to="/" className="mr-2 link_tag">
          home
        </Link>
        <Link to="/contact/" className="mr-2 link_tag">
          contact
        </Link>
        <Link to="/cart/" className="mr-2 link_tag">
          cart
        </Link>
        <Link to="/admin/" className="link_tag">
          admin
        </Link>
        <section className="d-flex justify-content-center pb-5 pt-5">
          <div id="brand" className="rounded text-center">
            <h1>brand here</h1>
          </div>
        </section>
      </div>
    );
  }
}

export default Navbar;
