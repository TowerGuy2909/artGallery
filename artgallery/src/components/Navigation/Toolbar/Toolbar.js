import React from 'react';

import classes from './Toolbar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuToggle from '../MobileMenu/MenuToggle/MenuToggle';

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <MenuToggle clicked={props.mobileMenuClicked}/>
            <div className={classes.Logo}>
                Midnight Musing
            </div>
            <nav >
                <NavigationItems />
            </nav>
        </header>
    );
}

export default toolbar;