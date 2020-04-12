import React from 'react';
import { Link } from "react-router-dom";

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <h1>{this.props.text}</h1>
                    <Link to="/" onClick={this.props.addToCart}>Add to Cart and Keep Shopping </Link>
                    <Link to="/checkout" onClick={this.props.addToCart}>Add to Cart and Go To Checkout</Link>
                    <button onClick={this.props.closePopup}>Close</button>
                </div>
            </div>
        );
    }
}

export default Popup;