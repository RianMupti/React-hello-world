import React, { Component, useState, useEffect } from 'react';
import './Hooks.css'

// class Hooks extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }

//     componentDidMount() {
//         document.title = `Count saat ini: ${this.state.count}`
//     }

//     componentDidUpdate() {
//         document.title = `Count saat ini: ${this.state.count}`
//     }

//     componentWillUnmount() {
//         document.title = `Hello React`
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     render() {
//         return (
//             <div className="p-hooks">
//                 <p>Nilai saya saat ini adalah: {this.state.count}</p>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//             </div>
//         )
//     }
// }

const Hooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count saat ini: ${count}`;
        return () => {
            document.title = `Hello React`;
        }
    })

    return (
        <div className="p-hooks">
            <p>Nilai saya saat ini adalah: {count}</p>
            <button onClick={() => setCount(count + 1)}>Update Nilai</button>
        </div>
    )
}

export default Hooks;