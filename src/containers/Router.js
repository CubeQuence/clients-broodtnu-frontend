import React, { Component } from 'react';
import RouteItem from '../components/RouteItem';
import { withRouter, matchPath } from 'react-router';
import { Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';

const mapStyles = styles => {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`
    };
};

const bounce = val => {
    return spring(val, {
        stiffness: 330,
        damping: 22
    });
};

const bounceTransition = {
    atEnter: {
        opacity: 0,
        scale: 1.2
    },
    atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8)
    },
    atActive: {
        opacity: bounce(1),
        scale: bounce(1)
    }
};

class RouterContainer extends Component {
    componentDidMount() {
        this.onRouteChanged(
            this.props.location,
            this.props.links,
            this.props.routes
        );
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged(
                this.props.location,
                this.props.links,
                this.props.routes
            );
        }
    }

    onRouteChanged(newLocation, links, routes) {
        const getPageTitleForPath = (newLocation, routes) => {
            for (let route of routes) {
                if (matchPath(newLocation, route)) {
                    return route.pageTitle;
                }
            }
        };

        let pageTitle = getPageTitleForPath(newLocation.pathname, routes);
        if (pageTitle) {
            this.props.pageNavigation(pageTitle, newLocation.pathname);
        } else {
            this.props.pageNavigation('Broodt', newLocation.pathname);
        }
    }

    render() {
        return (
            <div className="section">
                <div className="container">
                    <Route
                        render={({ location }) => (
                            <AnimatedSwitch
                                atEnter={bounceTransition.atEnter}
                                atLeave={bounceTransition.atLeave}
                                atActive={bounceTransition.atActive}
                                mapStyles={mapStyles}
                                className="route-wrapper"
                            >
                                {this.props.routes.map((route, index) => (
                                    <RouteItem key={index} {...route} />
                                ))}
                            </AnimatedSwitch>
                        )}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(RouterContainer);
