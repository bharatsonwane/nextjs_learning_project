import React, { Fragment } from 'react'
import PostsGrid from '../posts/posts-grid'
import classes from './featured-posts.module.css'


function FeaturedPosts(props) {
    return (
        <Fragment>
            <section className={classes.latest}>
                <h2>Featured Posts</h2>
                <PostsGrid posts={props.posts} />
            </section>
        </Fragment>
    )
}

export default FeaturedPosts