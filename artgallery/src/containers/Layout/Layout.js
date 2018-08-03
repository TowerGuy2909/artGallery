import React from 'react';

import Auxillary from '../../higherOrderComponents/Auxillary';

const layout = ( props ) => (
    <Auxillary>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxillary>
);

export default layout;