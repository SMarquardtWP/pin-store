import React from "react";
import { Inventory } from "./TemporaryDataBase";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      inventory: Inventory,
      hovered: false
    };
  }

  isHovered = () => {
    console.log("HEREHRE");
    this.setState({
      hovered: true
    });
  };

  stopHovered = () => {
    this.setState({
      hovered: false
    });
  };

  /**
   * Transitions the view to /products/:id
   * @param {String} _id - Product id
   */
  toProductPage = _id => {
    console.log("Main.js, toProductPage(), :id", _id);
  };

  render() {
    return (
      <div className="container-fluid">
        <section className="row p-0 m-0">
          {this.state.inventory.map((item, index) => {
            return (
              <div
                className="col-xs-12 col-md-6 col-lg-4 m-0 pb-3 d-flex justify-content-center"
                key={index}
              >
                <MainProduct item={item} toProductPage={this.toProductPage} />
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}

class MainProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovering: false };
  }

  startHovering = () => {
    this.setState({
      hovering: true
    });
  };

  stopHovering = () => {
    this.setState({
      hovering: false
    });
  };

  render() {
    return (
      <div
        className="main_product_container d-flex justify-content-center align-items-center"
        onMouseOver={this.startHovering}
        onMouseOut={this.stopHovering}
        onClick={() => this.props.toProductPage(this.props.item.product._id)}
      >
        <img
          className="main_product_image"
          src={this.props.item.product.image_main}
          alt=""
        />
        <div className="main_product_text_container">
          <Link
            to={{
              pathname: "/product/",
              state: {
                product: this.props.item.product
              }
            }}
          >
            <Animated isVisible={this.state.hovering} animateOnMount={false}>
              <div className="main_product_text d-flex justify-content-center align-items-center rounded">
                <div className="container text-light text-center">
                  <h6>{this.props.item.product.name}</h6>
                  <p>{this.props.item.product.description_short}</p>
                  <hr />
                  <p>{this.props.item.product.price}</p>
                </div>
              </div>
            </Animated>
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
