import React from 'react';

import classes from './NavigationItems.css';
import SingleNavItem from './SingleNavItem/SingleNavItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <div className={classes.Logo}>Midnight Musing</div> 
        <SingleNavItem link='/'>Home</SingleNavItem>
        <SingleNavItem link='/about'>About</SingleNavItem>
        <SingleNavItem link='/gallery'>Gallery</SingleNavItem>
        <SingleNavItem link='/contact'>Contact</SingleNavItem>
        <SingleNavItem link='/purchase'>Purchase</SingleNavItem>
    </ul>
);

export default navigationItems;