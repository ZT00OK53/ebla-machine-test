import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAuthedUser } from '../actions/authUser';
import {
    Segment,
    Grid,
    Header,
    Image,
    Form,
    Loader,
    Dimmer
} from 'semantic-ui-react';

class Login extends Component {

    state = {
        selectedUser: "",
        message: "",
    }

    handleAuthedUser = (id) => {
        this.setState({ selectedUser: setAuthedUser(id) })
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.selectedUser.id != null) {
            const { from } = this.props.location.state || {
                from: { pathname: '/questions' }
            };
            this.props.dispatch(setAuthedUser(this.state.selectedUser.id));
            this.props.history.push(from);
        }
        else {
            this.setState({ message: "Please select the user." })
        }
    };

    render() {
        const { userIds, users } = this.props;

        return (
            <React.Fragment>
                <Segment.Group>
                {this.state.message != ""? <span className='fw-bold text-danger mt-2 d-flex justify-content-center'>{this.state.message}</span>: null}
                    <LoginHeader />
                    <div className="text-center card-body">
                        <h4 className="fw-bold main-heading">Sign In</h4>
                        <form onSubmit={this.handleSubmit}>
                            <select className="form-select mt-3" aria-label="Default select example" onChange={(e) => this.handleAuthedUser(e.target.value)}>
                                <option>Select</option>
                                {userIds.map(user => (
                                    <option key={user} value={user}>{users[user].name}</option>
                                ))}
                            </select>
                            <button type="submit" className="btn sign-bg mt-3 w-100 text-white fw-bold">
                                Sign In
                            </button>
                        </form>
                    </div>
                </Segment.Group>
            </React.Fragment>
        );
    }
}

const LoginHeader = () => (
    <Header as="h4" block attached="top" textAlign="center">
        <Header.Content>Welcome to the Would You Rather App!</Header.Content>
        <Header.Subheader>Please sign in to continue</Header.Subheader>
    </Header>
);

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users),
        users
    };
}

export default connect(mapStateToProps)(Login);
