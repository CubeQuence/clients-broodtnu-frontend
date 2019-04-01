import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return (
            <main>
                <h1>Not Found</h1>
                <p>
                    Go back to <Link to="/">Home</Link>
                </p>
            </main>
        );
    }
}

export default NotFound;
