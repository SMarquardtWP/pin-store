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
            <ManifestBoard manifest={this.state.manifest}/>
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
            <div className="container-fluid">
                <section className="row p-0 m-0">
                    {this.state.manifest.map((item, index) => {
                        return (
                            <div className="manifest-container d-flex justify-content-center" key={index}>
                                <ul>
                                    <li className="row p-0 m-0">
                                        <ManifestEntry item={item} />
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                    )}
                </section>
            </div>
        );
    }
}

const ManifestEntry = (props) => {
    return (
        <li><div>{props.item._order_id}</div>
            <div>{props.item.date_ordered}</div>
            <div><ShippingAddress info={props.item.shipping_info} /></div>
            <div>{props.item.email}</div>
            <div>{props.item.products_purchased}</div>
            <div>{props.item.order_status}</div></li>
    )
}

const ShippingAddress = (props) => {
    return (
        <ul>
            <li>{props.info.name}</li>
            <li>{props.info.address1}</li>
            <li>{props.info.address2}</li>
            <li>{props.info.city}, {props.state} {props.zip}</li>
        </ul>
    )
}

export default Admin;