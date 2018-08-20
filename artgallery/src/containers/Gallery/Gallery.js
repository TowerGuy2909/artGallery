import React, {Component} from 'react';

import Auxillary from '../../higherOrderComponents/Auxillary';
import classes from './Gallery.css';

class Gallery extends Component {
    render() {
        return (
            <Auxillary>
                <div className={classes.Gallery}>paintings</div>
                <div className={classes.Gallery}>paintings</div>
                <div className={classes.Gallery}>paintings</div>
                <div>info</div>
            </Auxillary>
        );
    }
}

export default Gallery;