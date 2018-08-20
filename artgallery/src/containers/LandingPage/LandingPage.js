import React, {Component} from 'react';

import Auxillary from '../../higherOrderComponents/Auxillary';
import classes from './LandingPage.css';

class LandingPage extends Component {
    render() {
        return (
            <Auxillary className={classes.Landing}>
                <div className={classes.Image} >IMAGE</div>
                
            </Auxillary>
        );
    }
}

export default LandingPage;