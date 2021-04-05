// libraries
import React, { Fragment, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages
import LifeCycleComp from '../Pages/LifeCycleComp/LifeCycleComp';
import Product from '../Pages/Product/Product';
import BlogPost from '../Pages/BlogPost/BlogPost';
import YoutubeCompPage from '../Pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../Pages/BlogPost/DetailPost/DetailPost';

// style
import './Home.css';


export const RootContext = createContext();
const Provider = RootContext.Provider;



class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // showComponent: true
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

    // componentDidMount() {
    //     // setTimeout(() => {
    //     //     this.setState({
    //     //         showComponent: false
    //     //     })
    //     // }, 15000)
    // }

    render() {
        return (
            <Router>
                <Provider value={
                    {
                        state: this.state,
                        dispatch: this.dispatch
                    }
                }>

                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                        <Link to="/youtube-component">Youtube Component</Link>
                    </div>

                    <Switch>
                        <Route path="/" exact>
                            <BlogPost />
                        </Route>

                        <Route path="/detail-post/:id" component={DetailPost} />

                        <Route path="/product">
                            <Product />
                        </Route>

                        <Route path="/lifecycle">
                            <LifeCycleComp />
                        </Route>

                        <Route path="/youtube-component">
                            <YoutubeCompPage />
                        </Route>
                    </Switch>
                </Provider>

            </Router>
        )
    }
}

export default Home;