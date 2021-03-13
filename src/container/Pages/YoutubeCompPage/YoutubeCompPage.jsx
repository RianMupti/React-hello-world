import React, { Component, Fragment } from 'react';
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp';

class YoutubeCompPage extends Component {
    render() {
        return (
            <Fragment>
                <p>Youtube Component</p>
                <hr />
                <YoutubeComp
                    time="10.00"
                    title="Belajar Reactjs"
                    desc="100x ditonton. 5 hari yang lalu" />
                <YoutubeComp
                    time="10.00"
                    title="Belajar Reactjs"
                    desc="100x ditonton. 5 hari yang lalu" />
                <YoutubeComp
                    time="10.00"
                    title="Belajar Reactjs"
                    desc="100x ditonton. 5 hari yang lalu" />
                <YoutubeComp
                    time="10.00"
                    title="Belajar Reactjs"
                    desc="100x ditonton. 5 hari yang lalu" />
                <YoutubeComp />
            </Fragment>
        )
    }
}

export default YoutubeCompPage;