import React, { Fragment } from 'react'
import Image from 'next/image';
import classes from './hero.module.css';


function Hero() {
    return (
        <Fragment>
            <section className={classes.hero}>
                <div className={classes.image}>
                    <Image
                        src='/images/site/max.png'
                        alt='An image showing Max'
                        width={300}
                        height={300}
                    />
                </div>
                <h1>Hi, i'am Bharat</h1>
                <p>I blog about web development - especially frontend frameworks like Angular or React.</p>
            </section>
        </Fragment>
    )
}

export default Hero