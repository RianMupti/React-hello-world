import React, { Component } from 'react';
import Counter from './Counter';

class CardProduct extends Component {
    render() {
        return (
            <div className="card">
                <img src="" alt="image-product" />
                <p className="product-title">Daging ayam rasa sapi</p>
                <p className="product-price">Rp 340,000</p>
                <Counter onCounterChange={(data) => this.props.onCounterChange(data)} />
            </div>
        )
    }
}

export default CardProduct;