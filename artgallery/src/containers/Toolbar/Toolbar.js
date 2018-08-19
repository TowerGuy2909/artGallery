import React, {Component} from 'react';
import Auxillary from '../../higherOrderComponents/Auxillary';
import { Link } from 'react-router-dom';
import classes from './Toolbar.css';

class Toolbar extends Component {
    render() {
        return (
            <Auxillary>
                <ul className={classes.Toolbar}>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/gallery'}>Gallery</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/purchase'}>Purchase</Link></li>
                </ul>
            </Auxillary>
        );
    }
}

export default Toolbar;