import React, { Component, Fragment } from 'react';
import CardProduct from './CardProduct/CardProduct';
import { connect } from 'react-redux';
import './Product.css';

class Product extends Component {
    // state = {
    //     order: 3,
    //     name: "Rian Mupti Jauhari"
    // }

    // ketikaberubah = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return (
            <Fragment>
                <p>Product</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="" alt="logo" />
                    </div>
                    <div className="troley">
                        <img src="" alt="troley" />
                        <div className="count">{0}</div>
                    </div>
                </div>
                {/* <CardProduct onCounterChange={(Value) => this.ketikaberubah(Value)} /> */}
                <CardProduct />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

// export default connect(mapStateToProps)(Product);
export default Product;