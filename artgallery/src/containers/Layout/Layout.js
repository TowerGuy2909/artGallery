import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import Purchase from '../Purchase/Purchase';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import MobileMenu from '../../components/Navigation/MobileMenu/MobileMenu';
import Auxillary from '../../higherOrderComponents/Auxillary';

class Layout extends Component {
    state = {
        showMobileMenu: false
    }
 
    mobileMenuCloseHandler = () => {
        this.setState({showMobileMenu: false});
    }

    mobileToggleHandler = () => {
        this.setState((prevState) => {
           return {showMobileMenu: !prevState.showMobileMenu}
        });
    }

    render () {
        return(
            <Auxillary>
                <Toolbar mobileMenuClicked={this.mobileToggleHandler}/>
                <MobileMenu open={this.state.showMobileMenu} close={this.mobileMenuCloseHandler} />
                <Switch>
                    <Route exact path='/'  component={LandingPage} />
                    <Route exact path='/purchase'  component={Purchase} />
                    <Route  path='/contact' exact component={Contact} />
                    <Route  path='/gallery' exact component={Gallery} />
                    <Route exact path='/about'  component={About} />
                </Switch>
            </Auxillary>
        )
    }
}

export default Layout;