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
            },
            isUpdate: false
        }
    }

    getPostApi = () => {
        // Axios
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((result) => {
                this.setState({
                    post: result.data
                })
                // console.log(result)
            })
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
            .then((res) => {
                console.log(res)
                this.getPostApi()
                this.setState({
                    formBlogPost: {
                        userId: 1,
                        id: 1,
                        title: '',
                        body: '',
                    }
                })
            }, (err) => {
                console.log('errot: ', err);
            })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
            .then((res) => {
                console.log(res)
                this.getPostApi()
                this.setState({
                    isUpdate: false,
                    formBlogPost: {
                        userId: 1,
                        id: 1,
                        title: '',
                        body: '',
                    }
                })
            })
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then(() => {
                // console.log(res)
                this.getPostApi()
            })
    }

    handleUpdate = (value) => {
        // console.log(value)
        this.setState({
            formBlogPost: value,
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        // console.log("form change", event.target.value);
        let formBlogPostNew = { ...this.state.formBlogPost };
        let timeStamp = new Date().getTime();

        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timeStamp
        }

        formBlogPostNew[event.target.name] = event.target.value
        // console.log(event.target.name)
        // console.log('init state: ', this.state.formBlogPost);
        // console.log('new value: ', formBlogPostNew);
        // let title = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            // console.log("value obj formBlogPost: ", this.state.formBlogPost)
        });
    }


    handleSubmit = () => {
        if (this.state.isUpdate) {
            this.putDataToAPI()
        } else {
            this.postDataToAPI()
        }
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
                    <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" value={this.state.formBlogPost.body} cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-simpan" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map((res) => {
                        return <Post key={res.id} value={res} remove={this.handleRemove} update={this.handleUpdate} />
                    })
                }

            </Fragment>
        )
    }
}

export default BlogPost;