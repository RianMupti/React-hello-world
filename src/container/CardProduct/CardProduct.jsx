import React, { Component } from 'react';

class CardProduct extends Component {
    state = {
        order: 3,
        // name: "Rian Mupti Jauhari"
    }

    onHandleChange = (newValue) => {
        this.props.onChange(newValue)
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.onHandleChange(this.state.order)
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.onHandleChange(this.state.order)
            })
        }
    }
    render() {
        return (
            <div className="card">
                <img src="" alt="image-product" />
                <p className="product-title">Daging ayam rasa sapi</p>
                <p className="product-price">Rp 340,000</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="text" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        )
    }
}

export default CardProduct;