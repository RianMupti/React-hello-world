import React, { Fragment } from 'react';
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
// import Product from '../Product/Product';

class Home extends React.Component {
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

                <p>Life Cycle Component</p>
                <hr />
                <LifeCycleComp />
            </Fragment>
        )
    }
}

export default Home;