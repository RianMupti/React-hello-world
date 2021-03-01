import React, { Fragment } from 'react';
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
// import Product from '../Product/Product';
import BlogPost from '../BlogPost/BlogPost';

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
            <Fragment>
                {/* <h3>Youtube Component</h3>
                <hr />
                <YoutubeComp time="7.12" title="Contoh 1" desc="Lorem ipsum dolor sit amet consectetur adipisicing." />
                <YoutubeComp time="8.12" title="Contoh 2" desc="Lorem ipsum dolor sit amet consectetur adipisicing." />
                <YoutubeComp time="12.12" title="Contoh 3" desc="Lorem ipsum dolor sit amet consectetur adipisicing." />
                <YoutubeComp time="9.12" title="Contoh 4" desc="Lorem ipsum dolor sit amet consectetur adipisicing." />
                <YoutubeComp /> */}

                {/* <p>Product</p>
                <hr />
                <Product /> */}

                {/* <p>Life Cycle Component</p>
                <hr />
                {
                    this.state.showComponent
                        ?
                        <LifeCycleComp />
                        :
                        null
                } */}

                <p>Blog Post</p>
                <hr />
                <BlogPost />
            </Fragment>
        )
    }
}

export default Home;