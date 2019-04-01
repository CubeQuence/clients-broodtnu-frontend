import React, { Component } from 'react';

class AboutDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null
        };
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({
            id: id
        });
    }

    render() {
        return (
            <main>
                <p>ID is {this.state.id}</p>
            </main>
        );
    }
}

export default AboutDetail;
