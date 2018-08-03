import React, {Component} from 'react';

import Auxillary from '../../higherOrderComponents/Auxillary';

class Purchase extends Component {
    render() {
        return (
            <Auxillary>
                <div>
                <div>cost</div>
                <div>order</div>
                <div>delivery</div>
                </div>
            </Auxillary>
        );
    }
}

export default Purchase;