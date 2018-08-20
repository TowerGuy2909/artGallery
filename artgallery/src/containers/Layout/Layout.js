import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import Purchase from '../Purchase/Purchase';
// import Auxillary from '../../higherOrderComponents/Auxillary';
import Toolbar from '../Toolbar/Toolbar';

class Layout extends Component {
    render () {
        return(
            <div>
                <Toolbar />
                <Switch>
                    <Route exact path='/'  component={LandingPage} />
                    <Route exact path='/purchase'  component={Purchase} />
                    <Route  path='/contact' exact component={Contact} />
                    <Route  path='/gallery' exact component={Gallery} />
                    <Route exact path='/about'  component={About} />
                </Switch>
            </div>
        )
    }
}

export default Layout;