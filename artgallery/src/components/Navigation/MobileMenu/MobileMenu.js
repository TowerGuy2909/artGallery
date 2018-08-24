import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './MobileMenu.css';

const mobileMenu = (props) => {
    return(
        <div className={classes.MobileMenu}>
            <div className={classes.Logo}>Midnight Musing</div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default mobileMenu;