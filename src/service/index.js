import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

//Get
const getNewsBlog = Get('posts?_sort=id&_order=desc', false);
const getComment = Get('comments', true);

//Post
const postNewBlog = (data) => Post('posts', false, data)

// Put
const updateNewsBlog = (data, id) => Put(`posts/${id}`, false, data)

// Delete
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false)

const API = {
    getNewsBlog,
    getComment,
    postNewBlog,
    updateNewsBlog,
    deleteNewsBlog
}

export default API;

