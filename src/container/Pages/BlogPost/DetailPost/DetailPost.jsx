import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './DetailPost.css'

class DetailPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {
                title: '',
                body: ''
            }
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get(`http://localhost:3004/posts/${id}`)
            .then((res) => {
                // console.log('result: ', res)
                let post = res.data;
                this.setState({
                    post: {
                        title: post.title,
                        body: post.body
                    }
                })
            })
    }

    render() {
        return (
            <div className="p-detail-post">
                <p>Detail Post</p>
                <hr />
                <p className="detail-title">{this.state.post.title}</p>
                <p className="detail-boy">{this.state.post.body}</p>
            </div>
        )
    }
}

export default DetailPost;