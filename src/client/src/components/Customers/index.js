import React, { Component } from 'react';
import './customers.css';

export default class Customers extends Component {
    state = { customers: [], func: null }
    componentDidMount() {
        fetch('/api/customers')
            .then(res => {
                return res.json();
            }).catch(function (err) { console.log(err) })
            .then(data => {
                this.setState({ customers: data })
                console.log(data)
            })

        fetch('/api/func')
            .then(res => {
                console.log(res.body)
                return res.json();
            }).catch(function (err) { console.log(err) })
            .then(data => {
                console.log(data)
                this.setState({ func: data })
                console.log(data)
            })
    }

    render() {
        return (<div>
            <h1>Customers</h1>
            <ul>
                {this.state.customers.map(customer =>
                    <li key={customer.id}>{customer.first} {customer.last}</li>
                )}
            </ul>
            <h1>Func</h1>
            <div>{this.state.func}</div>
        </div>);
    }
}