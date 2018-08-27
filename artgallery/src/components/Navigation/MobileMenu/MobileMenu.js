import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './MobileMenu.css';
import Backdrop from '../../UserInterface/Backdrop/Backdrop';
import Auxillary from '../../../higherOrderComponents/Auxillary';

const mobileMenu = (props) => {
    let attachedClasses = [classes.MobileMenu, classes.Close];
    if (props.open) {
        attachedClasses = [classes.MobileMenu, classes.Open];
    }
    return(
        <Auxillary>
            <Backdrop show={props.open} clicked={props.close}/>
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo} onClick={props.clicked}>
                    Midnight Musing
                </div> 
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxillary>
    );
};

export default mobileMenu;