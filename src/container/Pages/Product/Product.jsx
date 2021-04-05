import React, { Component, Fragment } from 'react';
import CardProduct from './CardProduct/CardProduct';
import { connect } from 'react-redux';
import { RootContext } from '../../Home/Home';
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
            <RootContext.Consumer>
                {
                    value => {
                        return (
                            <Fragment>
                                <div className="container">
                                    <p>Product</p>
                                    <hr />
                                    <div className="header">
                                        <div className="logo">
                                            <img src="" alt="logo" />
                                        </div>
                                        <div className="troley">
                                            <img src="" alt="troley" />
                                            <div className="count">{value.state.totalOrder}</div>
                                        </div>
                                    </div>
                                    {/* <CardProduct onCounterChange={(Value) => this.ketikaberubah(Value)} /> */}
                                    <CardProduct />
                                </div>
                            </Fragment>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);
export default Product;