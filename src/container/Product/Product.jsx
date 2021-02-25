import React, { Component, Fragment } from 'react';
import CardProduct from '../CardProduct/CardProduct';
import './Product.css';

class Product extends Component {
    state = {
        order: 3,
        // name: "Rian Mupti Jauhari"
    }

    ketikaberubah = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="" alt="logo" />
                    </div>
                    <div className="troley">
                        <img src="" alt="troley" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onChange={(Value) => this.ketikaberubah(Value)} />
            </Fragment>
        )
    }
}

export default Product;