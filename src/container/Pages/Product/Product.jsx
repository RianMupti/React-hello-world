import React, { Component, Fragment } from 'react';
import CardProduct from './CardProduct/CardProduct';
// import { RootContext } from '../../Home/Home';
import './Product.css';
import { GlobalConsumer } from '../../../context/context';

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
            <div className="container">
                <p>Product</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="" alt="logo" />
                    </div>
                    <div className="troley">
                        <img src="" alt="troley" />
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                {/* <CardProduct onCounterChange={(Value) => this.ketikaberubah(Value)} /> */}
                <CardProduct />
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// export default connect(mapStateToProps)(Product);
export default GlobalConsumer(Product);