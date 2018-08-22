import React from 'react';

import classes from './SingleNavItem.css';

const singleNavItem = (props) => (
    <li className={classes.SingleNavItem}>
        <a
            href={props.link} /> {props.children}
    </li>
);

export default singleNavItem;