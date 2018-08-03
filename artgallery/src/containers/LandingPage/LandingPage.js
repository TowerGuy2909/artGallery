import React, {Component} from 'react';

import Auxillary from '../../higherOrderComponents/Auxillary';

class LandingPage extends Component {
    render() {
        return (
            <Auxillary>
                <div>Header</div>
                <div>Purpose</div>
                <div>image</div>
            </Auxillary>
        );
    }
}

export default LandingPage;