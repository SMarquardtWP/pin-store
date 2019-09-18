import React from "react";
// import { Link } from "react-router-dom";

const dummyProducts = [1, 2, 3, 4, 5, 6];
const productContainerClass =
  "col-xs-12 col-md-6 col-lg-4 m-0 pb-3 d-flex justify-content-center";
const productClass = "main_product rounded";

class Main extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <section className="row p-0 m-0">
          {dummyProducts.map((value, index) => {
            return (
              <div className={productContainerClass} key={index}>
                <div className={productClass}>
                  <button onClick={() => this.props.addToCart(value)}>
                    add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

export default Main;

/* <hr />
<h1>main</h1>
<Link to="/product/">Product</Link>
<Link to="/contact/">Contact</Link> */
