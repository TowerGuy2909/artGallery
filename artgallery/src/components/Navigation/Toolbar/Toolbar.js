import React from 'react';

import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => {
    return (
        <header>
            <nav className={classes.Toolbar}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default toolbar;