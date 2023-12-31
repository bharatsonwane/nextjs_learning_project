import React, { Fragment } from 'react'
import Link from 'next/link'
import Logo from './logo';
import classes from './main-navigation.module.css';


function MainNavigation() {
    return (
        <Fragment>
            <header className={classes.header}>
                <Link href="/">
                    <a><Logo /></a>
                </Link>
                <nav>
                    <ul>
                        <li><Link href='/posts'>Posts</Link></li>
                        <li><Link href='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    )
}

export default MainNavigation