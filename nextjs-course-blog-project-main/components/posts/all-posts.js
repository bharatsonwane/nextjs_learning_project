import React, { Fragment } from 'react'
import classes from './all-posts.module.css'
import PostsGrid from './posts-grid'


function AllPosts(props) {
    return (
        <Fragment>
            <section className={classes.posts}>
                <h1>All Posts</h1>
                <PostsGrid posts={props.posts} />
            </section>
        </Fragment>
    )
}

export default AllPosts
