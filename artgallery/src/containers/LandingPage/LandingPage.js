import React, {Component} from 'react';

import Auxillary from '../../higherOrderComponents/Auxillary';
import classes from './LandingPage.css';

class LandingPage extends Component {
    render() {
        return (
            <Auxillary className={classes.Landing}>
                <div className={classes.Header}>Jeff's Gallery</div>
                <div>Purpose</div>
                <div>image</div>
            </Auxillary>
        );
    }
}

export default LandingPage;