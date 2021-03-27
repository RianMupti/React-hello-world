import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
    // state = {
    //     order: 3,
    //     name: "Rian Mupti Jauhari"
    // }

    onHandleChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        this.setState({
            order: this.props.order + 1
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
        console.log(this.props)
        return (
            <div className="counter">
                <button className="minus" onClick={this.handleMinus}>-</button>
                <input type="text" value={this.props.order} />
                <button className="plus" onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

// export default connect(store(global), dispatch)(Counter);
export default connect(mapStateToProps)(Counter);