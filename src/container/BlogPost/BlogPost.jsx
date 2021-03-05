import React, { Component, Fragment } from 'react';
import Post from '../../component/Post/Post';
import './BlogPost.css';
import axios from 'axios';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            formBlogPost: {
                userId: 1,
                id: 1,
                title: '',
                body: '',
            }
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

    handleFormChange = (event) => {
        // console.log("form change", event.target.value);
        let formBlogPostNew = { ...this.state.formBlogPost };
        formBlogPostNew[event.target.name] = event.target.value
        // console.log(event.target.name)
        // console.log('init state: ', this.state.formBlogPost);
        // console.log('new value: ', formBlogPostNew);
        let title = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            console.log("value obj formBlogPost: ", this.state.formBlogPost)
        });
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
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-simpan">Simpan</button>
                </div>
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