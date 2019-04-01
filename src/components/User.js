import React, { Component } from 'react';

class User extends Component {
    render() {
        let content;

        if (!this.props.userData) {
            content = <h1>Loading</h1>;
        } else {
            content = (
                <div>
                    <div className="row">
                        <div className="col s2">
                            <img
                                className="responsive-img"
                                src={this.props.userData.avatar_url}
                                alt="profile"
                                width="200"
                            />
                        </div>
                        <div className="col s10">
                            <h1>{this.props.userData.name}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <table className="centered">
                            <tbody>
                                <tr>
                                    <td>ID</td>
                                    <td>{this.props.userData.id}</td>
                                </tr>
                                <tr>
                                    <td>Url</td>
                                    <td>
                                        <a href={this.props.userData.html_url}>
                                            {this.props.userData.html_url}
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>public_repos</td>
                                    <td>{this.props.userData.public_repos}</td>
                                </tr>
                                <tr>
                                    <td>public_gists</td>
                                    <td>{this.props.userData.public_gists}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }

        return <div>{content}</div>;
    }
}

export default User;
