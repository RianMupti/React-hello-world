import React, { Component, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import Post from '../../../component/Post/Post';
import './BlogPost.css';
import axios from 'axios';
import API from '../../../service';

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
            isUpdate: false,
            comments: []
        }
    }

    getPostApi = () => {
        API.getNewsBlog().then((result) => {
            this.setState({
                post: result
            })
        })
        API.getComment().then((result) => {
            this.setState({
                comments: result
            })
        })
    }

    postDataToAPI = () => {
        API.postNewBlog(this.state.formBlogPost).
            then((result) => {
                console.log(result)
                this.getPostApi()
                this.setState({
                    formBlogPost: {
                        userId: 1,
                        id: 1,
                        title: '',
                        body: '',
                    }
                })
            })
    }

    putDataToAPI = () => {
        API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id)
            .then((result) => {
                console.log(result)
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
        API.deleteNewsBlog(data)
            .then((result) => {
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

    handleDetail = (id) => {
        // const history = useHistory()
        this.props.history.push(`/detail-post/${id}`)
        // <Redirect to="/somewhere/else" />
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
                <hr />
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={this.state.formBlogPost.title} placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" value={this.state.formBlogPost.body} cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange}></textarea>
                    <button className="btn-simpan" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {/* <div>
                    {
                        this.state.comments.map((comments) => {
                            return <p>{comments.name} {comments.email}</p>
                        })
                    }
                </div> */}
                {
                    this.state.post.map((res) => {
                        return <Post key={res.id} value={res} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                    })
                }

            </Fragment>
        )
    }
}

export default withRouter(BlogPost);