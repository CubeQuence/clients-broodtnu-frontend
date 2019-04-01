import React, { Component } from 'react';
import User from '../components/User';

class GitHub extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentDidMount() {
        const { user } = this.props.match.params;

        fetch(`https://api.github.com/users/${user}`)
            .then(response => {
                return response.json();
            })
            .then(user => {
                this.setState(() => ({ user }));
            });
    }

    render() {
        return (
            <main>
                <User userData={this.state.user} />
            </main>
        );
    }
}

export default GitHub;
