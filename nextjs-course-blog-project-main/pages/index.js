import React, { Fragment } from 'react'
import FeaturedPosts from '../components/home-page/featured-posts'
import Hero from '../components/home-page/hero'
import { getFeaturedPosts } from "../lib/posts-util"
import Head from 'next/head'


function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Max' Blog</title>
                <meta
                    name='description'
                    content='I post about programming and web development.'
                />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    )
}

export default HomePage

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts()
    return {
        props: {
            posts: featuredPosts
        },
        // revalidate: 60
    }
};

