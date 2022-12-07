import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { setAuthedUser } from '../actions/authUser';
import "../css/Profile.css";

class Header extends Component {
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null));
    this.props.history.push('/');
  };

  render() {
    const { authedUser, users } = this.props;
    return (
      <div>
        <span className="text-capitalize">Hello {users[authedUser].name}!</span>&nbsp;
        <button className='btn btn-none px-4 shadow-none' onClick={this.handleLogout}>
          Logout
        </button>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  };
}
export default withRouter(connect(mapStateToProps)(Header));
