import React, { Component } from 'react';

import routerConfig from './config/router';

import HeaderContainer from './containers/Header';
import NavContainer from './containers/Nav';
import RouterContainer from './containers/Router';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle: 'Broodt',
            activeTab: '/'
        };

        this.pageNavigation = this.pageNavigation.bind(this);
    }

    componentDidMount() {
        // Remove loader
        const loader = document.getElementById('preloader');
        if (loader) {
            loader.classList.add('loaded');
            setTimeout(() => {
                loader.outerHTML = '';
            }, 2000);
        }
    }

    pageNavigation(newPageTitle, newActiveTab) {
        this.setState({
            pageTitle: newPageTitle,
            activeTab: newActiveTab
        });
    }

    render() {
        return (
            <div className="App">
                <HeaderContainer title={this.state.pageTitle} />

                <NavContainer
                    links={routerConfig.links}
                    activeTab={this.state.activeTab}
                />

                <RouterContainer
                    links={routerConfig.links}
                    routes={routerConfig.routes}
                    pageNavigation={this.pageNavigation}
                />
            </div>
        );
    }
}

export default App;
