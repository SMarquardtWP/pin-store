import React from "react";
import { Link } from "react-router-dom";

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>main</h1>
        <Link to="/product/">Product</Link>
        <Link to="/contact/">Contact</Link>
      </div>
    );
  }
}

export default Main;
