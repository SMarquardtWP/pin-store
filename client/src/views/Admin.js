import React from "react";
import { Link } from "react-router-dom";
import { Manifest } from "./TemporaryDataBase"

class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            credentials: "",
            manifest: Manifest
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
            <ManifestBoard manifest={this.state.manifest} />
        );
    }
}

class ManifestBoard extends React.Component {
    constructor(props) {
        super();
        this.state = {
            manifest: props.manifest
        }
    }

    render() {
        return (
            <div className="container">
                <section className="p-0 m-0">
                    {this.state.manifest.map((item, index) => {
                        return (
                            <div className="manifest-container container d-flex" key={index}>
                                <ManifestEntry item={item} />
                            </div>
                        )
                    })}
                </section>
            </div>
        );
    }
}

const ManifestEntry = (props) => {
    return (
        <div className="container-fluid p-0 m-0 manifest-entry border-bottom">
            <div className="row">
                <section className="col-1 d-flex align-items-center">{props.item._order_id}</section>
                <section className="col-2 d-flex align-items-center">{props.item.date_ordered}</section>
                <section className="col-3 d-flex text-left align-items-center"><ShippingAddress info={props.item.shipping_info} /></section>
                <section className="col-4 d-flex align-items-center">{props.item.email}</section>
                <section className="col-1 d-flex align-items-center">{props.item.products_purchased}</section>
                <section className="col-1 d-flex align-items-center">{props.item.order_status}</section>
            </div>
        </div>
    )
}

const ShippingAddress = (props) => {
    return (
        <ul className="list-unstyled mt-1">
            <li>{props.info.name}</li>
            <li>{props.info.address1}</li>
            <li>{props.info.address2}</li>
            <li>{props.info.city}, {props.info.state} {props.info.zip}</li>
        </ul>
    )
}

export default Admin;