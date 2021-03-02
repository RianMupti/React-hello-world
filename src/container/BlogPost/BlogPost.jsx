import React, { Component, Fragment } from 'react';
import Post from '../../component/Post/Post';
import './BlogPost.css';
import axios from 'axios';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: []
        }
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })

        // Axios
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((result) => {
                this.setState({
                    post: result.data
                })
            })
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                {
                    this.state.post.map((res) => {
                        return <Post key={res.id} title={res.title} desc={res.body} />
                    })
                }

            </Fragment>
        )
    }
}

export default BlogPost;