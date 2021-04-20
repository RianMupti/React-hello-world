// libraries
import React, { Fragment, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages
import LifeCycleComp from '../Pages/LifeCycleComp/LifeCycleComp';
import Product from '../Pages/Product/Product';
import BlogPost from '../Pages/BlogPost/BlogPost';
import YoutubeCompPage from '../Pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../Pages/BlogPost/DetailPost/DetailPost';
import GlobalProvider from '../../context/context';
import Hooks from '../Pages/Hooks/Hooks';

// style
import './Home.css';


class Home extends React.Component {

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

                <div className="navigation">
                    <Link to="/">Blog Post</Link>
                    <Link to="/product">Product</Link>
                    <Link to="/lifecycle">LifeCycle</Link>
                    <Link to="/youtube-component">Youtube Component</Link>
                    <Link to="/hooks">Hooks</Link>
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

                    <Route path="/hooks">
                        <Hooks />
                    </Route>

                </Switch>

            </Router>
        )
    }
}

export default GlobalProvider(Home);