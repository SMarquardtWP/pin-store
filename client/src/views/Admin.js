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
                <section className="row align-items-end">
                    <SearchBar />
                    <Filter />
                </section>
                <section className="p-0 m-0">
                    <hr />
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

const SearchBar = (props) => {
    return (
        <div className="search-bar col-3 mb-3 d-flex">
            <button type="button">Search</button>
            <input type="text" placeholder="Search term here" />
        </div>
    )
}

const Filter = (props) => {
    return (
        <div className="col-9 d-flex p-0 m-0 filter">
            <h3>Show all:</h3>
            <span className="m-2">
                <input className="mr-1" type="checkbox" id="filterDelivered" name="filterDelivered" value="Delivered" />
                <label htmlFor="filterDelivered">Delivered Orders</label>
            </span>
            <span className="m-2">
                <input className="mr-1" type="checkbox" id="filterShipped" name="filterShipped" value="Shipped" />
                <label htmlFor="filterShipped">Shipped Orders</label>
            </span>
            <span className="m-2">
                <input className="mr-1" type="checkbox" id="filterPaid" name="filterPaid" value="Paid" />
                <label htmlFor="filterPaid">Paid Orders</label>
            </span>
            <button type="button">Refresh</button>
       </div>
    )
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