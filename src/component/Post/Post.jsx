import React, { Fragment } from 'react';

const Post = (props) => {
    return (
        <Fragment>
            <div className="post">
                <div className="img-thumb">
                    <img src="https://placeimg.com/200/150/tech" alt="Dummy image" />
                </div>
                <div className="content">
                    <p className="title">{props.value.title}</p>
                    <p className="desc">{props.value.body}</p>
                    <button className="remove" onClick={() => props.remove(props.value.id)}>Remove</button>
                </div>
            </div>
        </Fragment >
    )
}

export default Post;