import React, {Component} from 'react';
import Auxillary from '../../higherOrderComponents/Auxillary';
import { Link } from 'react-router-dom';
import classes from './Toolbar.css';

class Toolbar extends Component {
    render() {
        return (
            <Auxillary>
                <ul className={classes.Toolbar}>
                    <li><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
                    <li><Link to={'/about'} style={{ textDecoration: 'none', color: 'white' }}>About</Link></li>
                    <li><Link to={'/gallery'} style={{ textDecoration: 'none', color: 'white' }}>Gallery</Link></li>
                    <li><Link to={'/contact'} style={{ textDecoration: 'none', color: 'white' }}>Contact</Link></li>
                    <li><Link to={'/purchase'} style={{ textDecoration: 'none', color: 'white' }}>Purchase</Link></li>
                </ul>
            </Auxillary>
        );
    }
}

export default Toolbar;