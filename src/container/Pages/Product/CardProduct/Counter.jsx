import React, { Component } from 'react';
// import { RootContext } from '../../../Home/Home';
import { GlobalConsumer } from '../../../../context/context';

class Counter extends Component {
    // state = {
    //     order: 3,
    //     name: "Rian Mupti Jauhari"
    // }

    // onHandleChange = (newValue) => {
    //     this.props.onCounterChange(newValue)
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.props.order + 1
    //     }, () => {
    //         this.onHandleChange(this.state.order)
    //     })
    // }

    // handleMinus = () => {
    //     if (this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.onHandleChange(this.state.order)
    //         })
    //     }
    // }

    render() {
        // console.log(this.props)
        console.log(this);
        return (
            <div className="counter">
                <button className="minus" onClick={() => this.props.dispatch({ type: 'MINUS_ORDER' })}>-</button>
                <input type="text" value={this.props.state.totalOrder} />
                <button className="plus" onClick={() => this.props.dispatch({ type: 'PLUS_ORDER' })}>+</button>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
//         handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER })
//     }
// }

// export default connect(store(global), dispatch)(Counter);
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default GlobalConsumer(Counter);