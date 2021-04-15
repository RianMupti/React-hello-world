import Get from './Get';
import Post from './Post';

//Get
const getNewsBlog = Get('posts?_sort=id&_order=desc', false);
const getComment = Get('comments', true);

//Post
const postNewBlog = (data) => Post('posts', false, data)

const API = {
    getNewsBlog,
    getComment,
    postNewBlog
}

export default API;

