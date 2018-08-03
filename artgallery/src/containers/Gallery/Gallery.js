import React, {Component} from 'react';

import Auxillary from '../../higherOrderComponents/Auxillary';

class Gallery extends Component {
    render() {
        return (
            <Auxillary>
                <div>paintings</div>
                <div>info</div>
            </Auxillary>
        );
    }
}

export default Gallery;