import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="text-center mt-5 mb-5">
        <div className="row p-0 m-0 d-flex justify-content-center">
          <p className="mr-2">home</p>
          <p className="mr-2">contact</p>
          <p>cart</p>
        </div>
        <p>copyright C 2019 StillSlangin</p>
        <p>made by Jnothn</p>
      </div>
    );
  }
}

export default Footer;
