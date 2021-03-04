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

    getPostApi = () => {
        // Axios
        axios.get('http://localhost:3004/posts')
            .then((result) => {
                this.setState({
                    post: result.data
                })
                // console.log(result)
            })
    }

    handleRemove = (data) => {
        // console.log(data)
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then(() => {
                // console.log(res)
                this.getPostApi()
            })
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then((json) => {
        //         this.setState({
        //             post: json
        //         })
        //     })

        this.getPostApi()
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">Blog Post</p>
                {
                    this.state.post.map((res) => {
                        return <Post key={res.id} value={res} remove={this.handleRemove} />
                    })
                }

            </Fragment>
        )
    }
}

export default BlogPost;