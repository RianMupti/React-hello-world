import React, { Component, createContext } from 'react';

const RootContext = createContext();

// Provider
const Provider = RootContext.Provider;

const GlobalProvider = (Children) => {

    constructor(props) {
        super(props)
        this.state = {
            totalOrder: 3
        }
    }

    dispatch = (action) => {
        if (action.type === 'PLUS_ORDER') {
            this.setState({
                totalOrder: this.state.totalOrder + 1
            })
        }

        if (action.type === 'MINUS_ORDER') {
            if (this.state.totalOrder > 0) {
                this.setState({
                    totalOrder: this.state.totalOrder - 1
                })
            }
        }
    }

    return (
        class ParentComp extends Component {
            render() {
                return (
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>

                        <Children {...this.props} />
                    </Provider>
                )
            }
        }
    )
}

export default GlobalProvider;

// Consumer