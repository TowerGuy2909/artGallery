import React from 'react';

import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {
    return (
        <header>
            <div className={classes.Logo} onClick={props.clicked}>
                Midnight Musing
            </div> 
            <nav className={classes.Toolbar}>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default toolbar;