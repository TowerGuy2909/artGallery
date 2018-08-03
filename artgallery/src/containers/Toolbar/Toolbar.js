import React, {Component} from 'react';

import Auxillary from '../../higherOrderComponents/Auxillary';

class LandingPage extends Component {
    render() {
        return (
            <Auxillary>
                <div>LandingPage</div>
                <div>About</div>
                <div>Gallery</div>
                <div>Contact</div>
                <div>Purchase</div>
            </Auxillary>
        );
    }
}

export default LandingPage;