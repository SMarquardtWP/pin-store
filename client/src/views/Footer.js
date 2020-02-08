import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="text-center mt-5 mb-5">
        <div className="row p-0 m-0 d-flex justify-content-center">
        <Link to="/" className="mr-2 link_tag">
          home
        </Link>
        <Link to="/contact/" className="mr-2 link_tag">
          contact
        </Link>
        <Link to="/cart/" className="link_tag">
          cart
        </Link>
        </div>
        <p>copyright C 2019 StillSlangin</p>
        <p>made by Jnothn</p>
      </div>
    );
  }
}

export default Footer;
