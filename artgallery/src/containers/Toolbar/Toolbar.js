import React, {Component} from 'react';
import Auxillary from '../../higherOrderComponents/Auxillary';
import { Link } from 'react-router-dom';

class Toolbar extends Component {
    render() {
        return (
            <Auxillary>
                <ul>
                    <li><Link to={'/'}>landingPage</Link></li>
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