import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RouteItem from '../components/RouteItem';

class About extends Component {
    render() {
        return (
            <main>
                <h1>About</h1>
                <p>
                    Alias laboriosam maiores autem nemo consectetur sed
                    perspiciatis minus quibusdam dolorem ratione sapiente amet
                    quia quis voluptates. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Earum culpa odio.
                </p>
                <div className="row white-text">
                    <Link
                        className="btn waves-effect waves-light"
                        to={`${this.props.match.url}/Topic1`}
                    >
                        id 1
                    </Link>
                    <Link
                        className="btn waves-effect waves-light"
                        to={`${this.props.match.url}/Topic2`}
                    >
                        id 2
                    </Link>
                    <Link
                        className="btn waves-effect waves-light"
                        to={`${this.props.match.url}/Topic3`}
                    >
                        id 3
                    </Link>
                </div>
                {this.props.routes.map((route, index) => (
                    <RouteItem key={index} {...route} />
                ))}
            </main>
        );
    }
}

export default About;
