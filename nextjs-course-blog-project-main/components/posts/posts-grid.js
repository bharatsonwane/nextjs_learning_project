import React, { Fragment } from 'react'
import PostItem from "./post-item"
import classes from './posts-grid.module.css'


function PostsGrid(props) {
    const { posts } = props
    return (
        <Fragment>
            <ul className={classes.grid}>
                {posts.map((post) => (
                    <PostItem key={post.slug} post={post} />
                ))}
            </ul>
        </Fragment>
    )
}

export default PostsGrid
