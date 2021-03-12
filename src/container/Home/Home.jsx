import React, { Fragment } from 'react';
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import Product from '../Product/Product';
import BlogPost from '../BlogPost/BlogPost';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showComponent: true
        }
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)
    }

    render() {
        return (
            <BrowserRouter>

                <div className="navigation">
                    <Link to="/">Blog Post</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/lifecycle">LifeCycle</Link>
                </div>

                <Switch>
                    <Route path="/" exact>
                        <BlogPost />
                    </Route>

                    <Route path="/product">
                        <Product />
                    </Route>

                    <Route path="/lifecycle">
                        <LifeCycleComp />
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Home;